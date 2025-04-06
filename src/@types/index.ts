import type { LucideIcon } from "lucide-react"

export type Task = {
    id: string
    title: string
    description: string
    date: string
    time: string
    completed: boolean
}

export type UserResponse = {
    id: string
    email: string
    imageUrl: string
    role: "ADMIN" | "CLIENT"
}

export type ContextProps = {
    params: {
        id: string
    }
}

export type Item = {
    title: string
    url: string
    Icon: LucideIcon
}

export type GetResponse<T> = {
    data: T[]
    count: number
}

export type Exercise = {
    name: string
    id: string
    series: number
    reps: number
    toFailure: boolean
    trainingId: string | null
}

export type TrainingWithExercise = {
    name: string
    id: string
    updatedAt: Date
    obs: string | null
    madeAt: Date
    userId: string
} & {
    exercises: Exercise[]
}