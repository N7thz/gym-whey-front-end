import { Button } from "@/components/ui/button"
import { LabelExercise } from "./label-exercise"
import { Trash } from "lucide-react"

type ExerciseItemProps = {
    index: number
    remove: (index: number) => void
}

export const ExerciseItem = ({ index, remove }: ExerciseItemProps) => {
    return (
        <div className="w-full space-y-3 mt-6 border p-4 rounded-md">
            <LabelExercise
                id="exercise_name"
                type="text"
                text="Nome do exercício"
                registerProps={`exercises.${index}.name`}
            />
            <LabelExercise
                id="exercise_reps"
                text="Repetições"
                registerProps={`exercises.${index}.reps`}
            />
            <LabelExercise
                id="exercise_series"
                text="Series"
                registerProps={`exercises.${index}.series`}
            />
            <Button
                type="button"
                variant="destructive"
                className="w-full"
                onClick={() => remove(index)}
            >
                <Trash className="size-4" />
                Remover Exercício
            </Button>
        </div>
    )
}
