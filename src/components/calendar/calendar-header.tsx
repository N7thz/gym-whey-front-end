import { format } from "date-fns"
import { CalendarArrowDown, CalendarArrowUp, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardDescription, CardHeader, CardTitle } from "../ui/card"
import { useCalendar } from "./calendar-provider"
import { ptBR } from "date-fns/locale"
import { dateInString } from "@/utils/date-in-string"
import { DaysOfWeek } from "./days-of-week"

export const CalendarHeader = () => {

    const { nextMonth, prevMonth, currentDate } = useCalendar()

    return (
        <>
            <CardHeader className="flex justify-between items-center mb-4">
                <CardTitle className="text-2xl font-bold capitalize">
                    {format(currentDate, "MMMM yyyy", { locale: ptBR })}
                </CardTitle>
                <div className="w-1/4 flex gap-2 justify-end">
                    <Button
                        variant={"outline"}
                        onClick={prevMonth}
                        className="w-1/2"
                    >
                        <CalendarArrowDown />
                        Mês Anterior
                    </Button>
                    <Button
                        variant={"outline"}
                        onClick={nextMonth}
                        className="w-1/2"
                    >
                        Próximo Mês
                        <CalendarArrowUp />
                    </Button>
                </div>
            </CardHeader>
            <DaysOfWeek className="w-full grid grid-cols-7 px-8" />
        </>
    )
}