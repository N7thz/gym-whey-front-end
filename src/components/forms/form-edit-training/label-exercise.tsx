import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"
import type { EditTrainingProps } from "@/schemas/edit-training-schema"

type RegisterProps =
    "obs" |
    "exercises" |
    `exercises.${number}` |
    `exercises.${number}.name` |
    `exercises.${number}.series` |
    `exercises.${number}.reps` |
    `exercises.${number}.toFailure`

type LabelExerciseNameProps = {
    id: string
    text: string
    registerProps: RegisterProps
}

export const LabelExercise = ({
    id,
    text,
    registerProps
}: LabelExerciseNameProps) => {

    const { register } = useFormContext<EditTrainingProps>()

    return (
        <Label htmlFor={id} className="flex flex-col gap-2">
            <span>
                {text}
            </span>
            <Input
                id={id}
                {...register(registerProps)}
            />
        </Label>
    )
}
