"use client"

import { CardShine } from "@/components/border-shine"
import { Button } from "@/components/ui/button"
import {
    CardHeader, CardTitle, CardContent, CardFooter
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { delay } from "@/utils/delay"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function Home() {

    const { push } = useRouter()

    const Schema = z.object({
        email: z.string().email({ message: "E-mail inválido" })
    })

    type Props = z.infer<typeof Schema>

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Props>({
        resolver: zodResolver(Schema)
    })

    const { isPending, mutate } = useMutation({
        mutationKey: ["mutations-test"],
        mutationFn: async ({ email }: Props) => {

            await delay(3000)

            if (email !== "teste@gmail.com") {
                throw new Error("email inválido")
            }

            return email
        },
        onSuccess: (data) => {
            console.log(data)
            push("/")
        },
        onError: ({ message }) => {
            console.log(message)
        }
    })

    function onSubmit(data: Props) {
        mutate(data)
    }

    console.log(errors)

    return (
        <div className="h-dvh flex items-center justify-center p-8">
            <CardShine className="w-1/2">
                <CardHeader>
                    <CardTitle>
                        Test
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form
                        id="form-mutatios"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Input
                            placeholder={
                                errors.email
                                    ? errors.email.message
                                    : "Email"
                            }
                            className={cn(errors.email && "placeholder:text-destructive")}
                            {...register("email")}
                        />
                    </form>
                </CardContent>
                <CardFooter>
                    <Button
                        form="form-mutatios"
                        type="submit"
                        className="w-full"
                        disabled={isPending}
                    >
                        {
                            isPending ? "Carregando..." : "Confirmar"
                        }
                    </Button>
                </CardFooter>
            </CardShine>
        </div>
    )
}