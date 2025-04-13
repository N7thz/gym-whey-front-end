import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useHttp } from "@/http/api"
import { useRouter } from "next/navigation"
import {
	type CreateAccountProps,
	CreateAccountSchema,
} from "@/schemas/create-account-schema"
import { toast } from "@/components/toast"
import { useMutation } from "@tanstack/react-query"

type CreateAccountRequest = Omit<CreateAccountProps, "confirm_password">

export function useCreateAccount() {

	const http = useHttp()
	const { push } = useRouter()

	const methods = useForm<CreateAccountProps>({
		resolver: zodResolver(CreateAccountSchema),
	})

	const {
		handleSubmit,
		watch,
		formState: { errors },
	} = methods

	const password = watch("password")
	const confirm_password = watch("confirm_password")

	const passwordsAreTheSame = (
		password !== "" &&
		confirm_password !== "" &&
		password === confirm_password
	)

	const { mutate, status } = useMutation({
		mutationKey: ["create-account-props"],
		mutationFn: async ({ email, password }: CreateAccountRequest) => {
			return await http
				.user
				.create({ email, password })
		},
		onSuccess: () => {

			toast({
				title: "O usuário foi criado com sucesso.",
				variant: "sucess",
			})

			setTimeout(() => push("/sign-in"), 2000)
		},
		onError: (({ message }) => {

			console.log(message)

			toast({
				title: "Erro ao criar usuário.",
				variant: "error",
			})
		})
	})

	const isLoading = status === "pending" || status === "success"

	const onSubmit = (formData: CreateAccountRequest) => mutate(formData)

	return {
		methods,
		errors,
		passwordsAreTheSame,
		handleSubmit,
		onSubmit,
		isLoading
	}
}
