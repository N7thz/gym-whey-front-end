"use client"

import { CardContent } from "@/components/ui/card"
import { Form } from "@/components/forms/form-primitive"
import { LabelPassword } from "../label-password"
import { useSignIn } from "./use-sign-in"
import { LabelEmail } from "../label-email"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const FormSignin = () => {

	const { methods, handleSubmit, onSubmit } = useSignIn()

	return (
		<CardContent className="space-y-5">
			<Form
				id="form-sign-in"
				methods={methods}
				onSubmit={handleSubmit(onSubmit)}
				className="space-y-5"
			>
				<LabelEmail />
				<LabelPassword
					text="Senha"
					value="password"
				/>
			</Form>
			<div className="flex gap-2 items-center">
				<Separator className="shrink" />
				<span>
					ou
				</span>
				<Separator className="shrink" />
			</div>
			<div>
				<Link href="/create-account">
					<Button
						variant={"link"}
						className="w-full italic text-base"
					>
						Criar conta
					</Button>
				</Link>
			</div>
		</CardContent>
	)
}
