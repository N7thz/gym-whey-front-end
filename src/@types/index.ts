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

type Exercise = {
    id: string;
    name: string;
    series: number;
    reps: number;
    toFailure: boolean;
    trainingId: string | null;
}

export type Training = {
    id: string
    name: string
    obs: string | null
    madeAt: Date
    updatedAt: Date
    exercises: Exercise[]
}