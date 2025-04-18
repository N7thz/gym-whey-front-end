import { format, isSameMonth, isSameDay } from "date-fns"
import { cn } from "@/lib/utils"
import { useCalendar } from "./calendar-provider"
import { Training } from "@/@types"
import { ScrollArea } from "../ui/scroll-area"
import { DialogTitle, DialogTrigger, Dialog, DialogContent } from "../ui/dialog"
import { DialogCalendarContent } from "./dialog-calendar/dialog-calendar-content"

type CalendarDayProps = {
    day: Date
    trainings: Training[]
}

export const CalendarDay = ({
    trainings, day
}: CalendarDayProps) => {

    const { currentDate, selectedDate } = useCalendar()

    const isToday = isSameDay(day, selectedDate)
    const isCurrentMonth = isSameMonth(day, currentDate)

    return (
        <ScrollArea className={cn(
            "h-[140px] p-2 border-2 rounded-md",
            isToday && "border-violet-500 text-violet-500",
            !isCurrentMonth && "text-muted-foreground border-muted border",
        )}>
            <div
                className="text-right"
                children={format(day, "d")}
            />
            <div className="flex flex-col gap-1">
                {
                    trainings.map(training => {

                        const { id, madeAt, name } = training

                        const isNotSameDay = !isSameDay(new Date(madeAt), day)

                        if (isNotSameDay) return null

                        return (
                            <Dialog key={id}>
                                <DialogTrigger>
                                    <div
                                        className={cn(
                                            "text-xs truncate p-1 rounded-sm bg-primary/10 text-start cursor-pointer"
                                        )}
                                        children={name}
                                    />
                                </DialogTrigger>
                                <DialogCalendarContent training={training} />
                            </Dialog>
                        )
                    })
                }
            </div>
        </ScrollArea>
    )
}
