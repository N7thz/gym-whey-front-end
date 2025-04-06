"use client"

import { CardContent } from "@/components/ui/card"
import { Form } from "@/components/forms/form-primitive"
import { ErrorSpan } from "@/components/error-span"
import { useCreateAccount } from "./use-create-account"
import { LabelPassword } from "../label-password"
import { LabelEmail } from "../label-email"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export const FormCreateAccount = () => {

	const {
		methods,
		errors,
		passwordsAreTheSame,
		handleSubmit,
		onSubmit
	} = useCreateAccount()

	return (
		<CardContent className="space-y-5">
			<Form
				id="create-account"
				methods={methods}
				className="space-y-5"
				onSubmit={handleSubmit(onSubmit)}
			>
				<LabelEmail />
				<LabelPassword value="password" text="Senha" />
				<LabelPassword
					value="confirm_password"
					text="Confirmar Senha"
				/>
				{errors.confirm_password &&
					errors.confirm_password.type === "custom" &&
					!passwordsAreTheSame && (
						<ErrorSpan
							message={errors.confirm_password.message}
							className="text-base"
							size={16}
						/>
					)}
			</Form>
			<div className="flex gap-2 items-center">
					<Separator className="shrink" />
					<span>
						ou
					</span>
					<Separator className="shrink" />
				</div>
				<div>
					<Link href="/segn-in">
						<Button
							variant={"link"}
							className="w-full italic text-base"
						>
							Login
						</Button>
					</Link>
				</div>
		</CardContent>
	)
}
