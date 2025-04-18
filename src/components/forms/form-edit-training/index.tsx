import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import type { Training } from "@/@types"
import { Form } from "../form-primitive"
import { useForm } from "react-hook-form"
import {
    editTrainingSchema, type EditTrainingProps
} from "@/schemas/edit-training-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { EditTraininigInfo } from "./edit-traininig-info"
import { EditExercisesInfo } from "./edit-exercises-info"
import { FormEditTrainingFooter } from "./form-edit-training-footer"
import { useMutation } from "@tanstack/react-query"
import { useHttp } from "@/http/api"
import { toast } from "@/components/toast"
import { useRouter } from "next/navigation"
import { delay } from "@/utils/delay"

type FormEditTrainingProps = { training: Training }

export const FormEditTraining = ({
    training: { id, name, obs, exercises },
}: FormEditTrainingProps) => {

    const http = useHttp()
    const { push } = useRouter()

    const { mutate, isPending } = useMutation({
        mutationKey: ["edit-training"],
        mutationFn: async (data: EditTrainingProps) => {
 
            await delay(5000)

            return await http.training.update({ id, ...data })
        },
        onSuccess() {

            toast({ title: "O treino foi atualizado com sucesso." })

            setTimeout(() => push("/calendar"), 2000)
        },
        onError: ((err) => {

            console.log(err)

            toast({
                title: "Erro ao atualizar treino.",
                variant: "error",
            })
        })
    })

    const methods = useForm<EditTrainingProps>({
        resolver: zodResolver(editTrainingSchema),
        defaultValues: {
            name,
            obs,
            exercises
        }
    })

    const { handleSubmit, formState: { errors } } = methods

    function onSubmit(data: EditTrainingProps) {
        mutate(data)
    }

    console.log(errors)

    return (
        <Form
            methods={methods}
            className="size-11/12"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Card className="size-full">
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Editar Treino
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex justify-between divide-x-2 gap-6">
                    <EditTraininigInfo />
                    <EditExercisesInfo methods={methods} />
                </CardContent>
                <FormEditTrainingFooter isLoading={isPending} />
            </Card>
        </Form>
    )
}
