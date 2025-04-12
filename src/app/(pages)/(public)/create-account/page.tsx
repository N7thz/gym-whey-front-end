import { CardShine } from "@/components/border-shine"
import { FormCreateAccount } from "@/components/forms/form-create-account"
import { Button } from "@/components/ui/button"
import {
	CardHeader,
	CardTitle,
	CardFooter,
	CardDescription,
} from "@/components/ui/card"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
	title: "Whey Gym | Criação de usuário",
}

export default function CreateAccount() {
	return (
		<div className="h-dvh w-full flex items-center justify-center">
			<CardShine className="w-1/3">
				<CardHeader>
					<CardTitle className="text-3xl">Criar Usuário</CardTitle>
					<CardDescription>Crie um novo usuário</CardDescription>
				</CardHeader>
				<FormCreateAccount />
			</CardShine>
			<Toaster />
		</div>
	)
}
