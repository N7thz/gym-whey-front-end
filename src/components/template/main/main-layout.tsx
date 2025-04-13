"use client"

import { ListView } from "@/components/template/main/list-view"
import type { TrainingWithExercise } from "@/@types"
import { CalendarView } from "@/components/calendar/calendar-view"

export type MainProps = {
    data: TrainingWithExercise[] | undefined
    isLoading: boolean
}

export const MainLayout = ({ view }: { view: "calendar" | "list" }) => {

    if (view === "list") return <ListView />

    return <CalendarView />
}