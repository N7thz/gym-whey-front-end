"use client"

import { MainList } from "@/components/template/main/main-list"
import { api } from "@/http/api"
import { useQuery } from "@tanstack/react-query"
import type { TrainingWithExercise } from "@/@types"
import { CalendarView } from "@/components/calendar/calendar-view"

export type MainProps = {
    data: TrainingWithExercise[] | undefined
    isLoading: boolean
}

export const MainLayout = ({ view }: { view: "calendar" | "list" }) => {

    const { data, isLoading } = useQuery({
        queryKey: ["find-many-trainings-by-user-id"],
        queryFn: async () => {
            const { data } = await api.get<TrainingWithExercise[]>("/trainings")

            return data
        }
    })

    if (view === "list") return (
        <MainList
            data={data}
            isLoading={isLoading}
        />
    )

    return <CalendarView />
}