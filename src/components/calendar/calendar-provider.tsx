"use client"

import { Dispatch, SetStateAction, useState } from "react"
import {
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    addMonths,
    subMonths,
    endOfWeek,
    startOfWeek,
} from "date-fns"
import { createContext, ReactNode, useContext } from "react"

interface CalendarContextProps {
    monthDays: Date[]
    currentDate: Date
    selectedDate: Date
    setSelectedDate: Dispatch<SetStateAction<Date>>
    nextMonth: () => void
    prevMonth: () => void
}

type BuildCalendarProps = {
    month: number
    year: number
}

const CalendarContext = createContext({} as CalendarContextProps)

export function CalendarProvider({ children }: { children: ReactNode }) {

    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())

    const monthDays = buildCalendar({
        month: currentDate.getMonth(),
        year: currentDate.getFullYear()
    })

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1))

    function buildCalendar({ month, year }: BuildCalendarProps) {

        const monthStart = startOfMonth(new Date(year, month))

        const gridStart = startOfWeek(monthStart)
        const gridEnd = endOfWeek(endOfMonth(new Date(year, month)))

        const daysGrid = eachDayOfInterval({ start: gridStart, end: gridEnd })

        return daysGrid
    }

    const value: CalendarContextProps = {
        currentDate,
        monthDays,
        nextMonth,
        prevMonth,
        selectedDate,
        setSelectedDate,
    }

    return (
        <CalendarContext.Provider value={value}>
            {children}
        </CalendarContext.Provider>
    )
}

export const useCalendar = () => useContext(CalendarContext)