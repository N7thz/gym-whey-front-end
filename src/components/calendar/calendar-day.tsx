import { format, isSameMonth, isSameDay } from "date-fns"
import { cn } from "@/lib/utils"
import { useCalendar } from "./calendar-provider"
import { TrainingWithExercise } from "@/@types"
import { ScrollArea } from "../ui/scroll-area"
import { DialogTitle, DialogTrigger, Dialog, DialogContent } from "../ui/dialog"

type CalendarDayProps = {
    day: Date
    trainings: TrainingWithExercise[]
}

export const CalendarDay = ({
    trainings, day
}: CalendarDayProps) => {

    const { currentDate, selectedDate } = useCalendar()

    const isToday = isSameDay(day, selectedDate)
    const isCurrentMonth = isSameMonth(day, currentDate)

    return (
        <Dialog>
            <ScrollArea className={cn(
                "h-[140px] p-2 border-2 rounded-md",
                isToday && "border-violet-500 text-violet-500",
                !isCurrentMonth && "text-muted-foreground border-muted border",
            )}>
                <div
                    className="text-right"
                    children={format(day, "d")}
                />
                <div>
                    {
                        trainings.map(({ id, madeAt, name }) => {

                            if (!isSameDay(new Date(madeAt), day)) return null

                            return (
                                <Dialog key={id}>
                                    <DialogTrigger>
                                        <div
                                            className={cn(
                                                "text-xs truncate p-1 my-1 rounded-sm bg-primary/10"
                                            )}
                                            children={name}
                                        />
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogTitle>
                                            {name}
                                        </DialogTitle>
                                    </DialogContent>
                                </Dialog>
                            )
                        })
                    }
                </div>
            </ScrollArea>
        </Dialog>
    )
}
