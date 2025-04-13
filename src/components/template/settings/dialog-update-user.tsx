import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription
} from "@/components/ui/alert-dialog"
import { UserRoundPen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FormUpdateUser } from "@/components/forms/form-update-user"
import { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export const DialogUpdateUser = ({
    className, ...props
}: ComponentProps<typeof Button>) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className={cn("flex-1", className)}
                    {...props}
                >
                    <UserRoundPen />
                    Editar Dados
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogTitle>
                    Editar Dados
                </AlertDialogTitle>
                <AlertDialogDescription>
                    Edite dos dados do seu usuário
                </AlertDialogDescription>
                <FormUpdateUser />
            </AlertDialogContent>
        </AlertDialog>
    )
}
