import { CardShine } from "@/components/border-shine"
import { FormSignin } from "@/components/forms/form-sign-in"
import { Button } from "@/components/ui/button"
import {
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@/components/ui/card"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

export default function Signin() {
	return (
		<div className="h-dvh w-full flex items-center justify-center">
			<CardShine className="w-1/3">
				<CardHeader>
					<CardTitle className="text-3xl">Login</CardTitle>
					<CardDescription>Logue em sua conta</CardDescription>
				</CardHeader>
				<FormSignin />
			</CardShine>
			<Toaster />
		</div>
	)
}
