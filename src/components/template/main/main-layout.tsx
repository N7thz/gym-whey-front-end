"use client"

import { MainList } from "@/components/template/main/main-list"
import { api, useHttp } from "@/http/api"
import { useQuery } from "@tanstack/react-query"
import type { TrainingWithExercise } from "@/@types"
import { CalendarView } from "@/components/calendar/calendar-view"

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

    if (view === "calendar") return (
        <CalendarView />
    )

    return (
        <MainList
            data={data}
            isLoading={isLoading}
        />
    )
}