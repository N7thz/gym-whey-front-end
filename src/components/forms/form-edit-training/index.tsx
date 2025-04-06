import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { TrainingWithExercise } from "@/@types"
import { Form } from "../form-primitive"
import { useForm, useFieldArray } from "react-hook-form"
import {
    editTrainingSchema, type EditTrainingProps
} from "@/schemas/edit-training-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { ScrollArea } from "@/components/ui/scroll-area"
import { EditTraininigInfo } from "./edit-traininig-info"
import { ExerciseItem } from "./exercise-item"

export const FormEditTraining = ({
    training: { name, obs, exercises },
}: { training: TrainingWithExercise }) => {

    const methods = useForm<EditTrainingProps>({
        resolver: zodResolver(editTrainingSchema),
        defaultValues: {
            name,
            obs,
            exercises
        }
    })

    const { control } = methods

    const { append, fields, remove } = useFieldArray({
        name: "exercises",
        control,
    })

    console.log(fields)

    const { handleSubmit } = methods

    function onSubmit(data: EditTrainingProps) {
        console.log(data)
    }

    function addExercise() {
        append({ name: "", reps: 0, series: 0, toFailure: false })
    }

    return (
        <Form
            methods={methods}
            className="size-11/12"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Card className="size-full">
                <CardHeader>
                    <CardTitle className="text-2xl">Editar Treino</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex justify-between divide-x-2 gap-6">
                    <EditTraininigInfo />
                    <Card className="w-1/2">
                        <CardHeader>
                            <CardTitle>Exercícios</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="w-full h-96 space-y-6">
                                {
                                    fields.length === 0
                                        ? (
                                            <CardTitle className="text-center text-muted-foreground">
                                                Sem exercícios cadastrados
                                            </CardTitle>
                                        )
                                        : fields.map(({ id }, index) => (
                                            <ExerciseItem
                                                key={id}
                                                index={index}
                                                remove={remove}
                                            />
                                        ))
                                }
                            </ScrollArea>
                        </CardContent>
                        <CardFooter className="gap-2">
                            <Button
                                type="button"
                                variant="secondary"
                                className="w-1/2"
                                onClick={addExercise}
                            >
                                Adicionar Exercício
                            </Button>
                            <Button
                                type="button"
                                variant="destructive"
                                className="w-1/2"
                                disabled={fields.length === 0}
                                onClick={() => remove()}
                            >
                                Romover todos
                            </Button>
                        </CardFooter>
                    </Card>
                </CardContent>
                <CardFooter>
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Confirmar
                    </Button>
                </CardFooter>
            </Card>
        </Form>
    )
}
