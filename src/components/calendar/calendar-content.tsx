import { CardContent } from "../ui/card"
import { useCalendar } from "./calendar-provider"
import { Training } from "@/@types"
import { api } from "@/http/api"
import { useQuery } from "@tanstack/react-query"
import { ScrollArea } from "../ui/scroll-area"
import { CalendarDay } from "./calendar-day"
import { QueryKeys } from "@/lib/query-keys"

export const CalendarContent = () => {

    const { monthDays } = useCalendar()
    const queryKey = QueryKeys()

    const { data: trainings, isLoading } = useQuery({
        queryKey: queryKey.findManyTrainingsByUserId(),
        queryFn: async () => {

            const { data } = await api.get<Training[]>("/trainings")

            return data
        }
    })

    if (isLoading || !trainings) return (
        <div className="text-center">
            Loading...
        </div>
    )

    return (
        <ScrollArea className="h-6/7 w-full border rounded-lg p-4">
            <CardContent className="w-full grid grid-cols-7 gap-1 px-0">
                {
                    monthDays.map((day, index) => (
                        <CalendarDay
                            key={index}
                            day={day}
                            trainings={trainings}
                        />
                    ))
                }
            </CardContent>
        </ScrollArea>
    )
}