import { z } from "zod"

const exerciseSchema = z.object({
    name: z.string().nullable(),
    series: z.any().transform(Number).nullable(),
    reps: z.any().transform(Number).nullable(),
    toFailure: z.boolean().nullable(),
})

export const editTrainingSchema = z.object({
    name: z.string().nullable(),
    obs: z.string().nullable(),
    exercises: z.array(exerciseSchema),
})    

export type EditTrainingProps = z.infer<typeof editTrainingSchema>