"use client"

import { Card } from "@/components/ui/card"
import { CalendarHeader } from "./calendar-header"
import { CalendarContent } from "./calendar-content"
import { CalendarProvider } from "./calendar-provider"

export function CalendarView() {
    return (
        <CalendarProvider>
            <Card className="flex-1 border-none rounded-none">
                <CalendarHeader />
                <CalendarContent />
            </Card>
        </CalendarProvider>
    )
}