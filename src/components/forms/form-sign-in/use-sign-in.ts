import { useForm } from "react-hook-form"
import { type SigninProps, SigninSchema } from "@/schemas/sign-in-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useHttp } from "@/http/api"
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { toast } from "@/components/toast"
import { useMutation } from "@tanstack/react-query"

export function useSignIn() {

	const http = useHttp()

	const { refresh } = useRouter()

	const methods = useForm<SigninProps>({
		resolver: zodResolver(SigninSchema),
	})

	const { handleSubmit, formState: { errors } } = methods

	console.error(errors)

	const oneDayInSeconds = 24 * 60 * 60

	const { mutate, status } = useMutation({
		mutationFn: async ({ email, password }: SigninProps) => {

			const {
				data: {
					acess_token
				}
			} = await http
				.authenticate
				.signIn({ email, password })

			return { acess_token }
		},
		mutationKey: ["sign-in"],
		onSuccess: ({ acess_token }) => {
			setCookie("token", acess_token, { maxAge: oneDayInSeconds })
			refresh()
		},
		onError: (({ message }) => {

			console.log(message)

			toast({
				title: "Email ou senha incorretos.",
				variant: "error",
			})
		})
	})

	const isLoading = status === "pending" || status === "success"

	const onSubmit = (formData: SigninProps) => mutate(formData)

	return { methods, handleSubmit, onSubmit, isLoading }
}
