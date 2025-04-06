"use client"

import { MainCalendar } from "@/components/calendar/main-calendar"
import { MainList } from "@/components/template/main/main-list"
import { api, useHttp } from "@/http/api"
import { useQuery } from "@tanstack/react-query"
import type { TrainingWithExercise } from "@/@types"

export type MainProps = {
    data: TrainingWithExercise[] | undefined
    isLoading: boolean
}

export const MainLayout = ({ view }: { view: "calendar" | "list" }) => {

    const http = useHttp()

    const { data, isLoading, status } = useQuery({
        queryKey: ["find-many-trainings-by-user-id"],
        queryFn: async () => {
            const { data } = await api.get<TrainingWithExercise[]>("/trainings")

            return data
        }
    })

    console.log(data)

    if (view === "calendar") return (
        <MainCalendar
            data={data}
            isLoading={isLoading}
        />
    )

    return (
        <MainList
            data={data}
            isLoading={isLoading}
        />
    )
}