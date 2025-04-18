import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useFormContext } from "react-hook-form"
import type { EditTrainingProps } from "@/schemas/edit-training-schema"

export const EditTraininigInfo = () => {

    const { register } = useFormContext<EditTrainingProps>()

    return (
        <div className="w-1/2 pr-6 space-y-6">
            <Label htmlFor="name" className="flex flex-col gap-2">
                <span>Nome:</span>
                <Input
                    id="name"
                    {...register("name")}
                />
            </Label>
            <Label htmlFor="obs" className="flex flex-col gap-2">
                <span>Obs:</span>
                <Textarea
                    id="obs"
                    className="min-h-50"
                    {...register("obs")}
                />
            </Label>
        </div>
    )
}
