"use client"

import { Button } from "@/components/ui/button"
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar } from "@/components/avatar"
import { FormUploadImage } from "@/components/forms/form-upload-image"
import { useRouter } from "next/navigation"
import { useCurrentUser } from "@/providers/user-current-provider"
import { signOut } from "@/functions/sign-out"
import { ModeToggle } from "../mode-toogle"

export const SheetAvatar = () => {

	const { refresh } = useRouter()
	const { data: user, isLoading, isOpen, setIsOpen } = useCurrentUser()

	if (!user || isLoading) return <Avatar src={null} />

	const { id, email, imageUrl } = user

	return (
		<Sheet
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<SheetTrigger>
				<Avatar
					src={imageUrl}
					alt="icon-image"
				/>
			</SheetTrigger>
			<SheetContent className="flex flex-col justify-between">
				<div className="space-y-12">
					<SheetHeader>
						<SheetTitle>Opções</SheetTitle>
						<SheetDescription>
							Bem vindo
							<span className="mx-1">
								{email}
							</span>
						</SheetDescription>
					</SheetHeader>
					<div className="px-6">
						<ModeToggle />
					</div>
					<FormUploadImage
						id={id}
						oldImage={imageUrl}
						setIsOpen={setIsOpen}
					/>
				</div>
				<SheetFooter className="w-full">
					<Button className="w-full" onClick={() => signOut(refresh)}>
						Sair
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
