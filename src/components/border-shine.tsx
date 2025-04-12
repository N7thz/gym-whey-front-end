import type { ComponentProps } from "react"
import { Card } from "@/components/ui/card"
import { ShineBorder } from "@/components/magicui/shine-border"
import { cn } from "@/lib/utils"

type CardShineProps = ComponentProps<typeof Card> & {
    shineColor?: string[]
}

export const CardShine = ({
    shineColor = ["#6a0dad", "#8a2be2", "#dda0dd"],
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
