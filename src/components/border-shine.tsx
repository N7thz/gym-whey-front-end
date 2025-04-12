import type { ComponentProps } from "react"
import { Card } from "@/components/ui/card"
import { ShineBorder } from "@/components/magicui/shine-border"
import { cn } from "@/lib/utils"

type CardShineProps = ComponentProps<typeof Card> & {
    shineColor?: string[]
}

export const CardShine = ({
    shineColor = ["#A07CFE", "#FE8FB5", "#FFBE7B"],
    children,
    className,
    ...props
}: CardShineProps) => {
    return (
        <Card
            className={cn("relative overflow-hidden", className)}
            {...props}
        >
            <ShineBorder shineColor={shineColor} />
            {children}
        </Card>
    )
}
