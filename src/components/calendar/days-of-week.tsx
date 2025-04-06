import { ComponentProps } from "react"
import { Card, CardContent } from "../ui/card"

export const DaysOfWeek = ({
    className, ...props
}: ComponentProps<typeof Card>) => {

    const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

    return (
        <Card className="border-none rounded-none" {...props}>
            <CardContent className="divide-x-2 w-full grid grid-cols-7">
                {
                    daysOfWeek.map((day, index) => (
                        <div
                            key={index}
                            className="w-full text-center font-semibold"
                        >
                            {day}
                        </div>
                    ))
                }
            </CardContent>
        </Card>
    )
}
