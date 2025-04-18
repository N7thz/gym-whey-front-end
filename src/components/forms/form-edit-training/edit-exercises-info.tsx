import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useFieldArray, UseFormReturn } from "react-hook-form"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ExerciseItem } from "./exercise-item"
import type { EditTrainingProps } from "@/schemas/edit-training-schema"

type EditExercisesInfoProps = {
    methods: UseFormReturn<EditTrainingProps>
}

export const EditExercisesInfo = ({ methods }: EditExercisesInfoProps) => {

    const { append, fields, remove } = useFieldArray({
        name: "exercises",
        control: methods.control,
    })

    function addExercise() {
        append({ name: "", reps: 0, series: 0, toFailure: false })
    }

    return (
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
    )
}
