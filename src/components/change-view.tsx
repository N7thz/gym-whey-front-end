"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar, List } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "./ui/button"

export const ChangeView = () => {

    const { push } = useRouter()
    const { view } = useParams<{ view: "calendar" | "list" }>()

    return (
        <div className="flex items-center justify-between px-6">
            <RadioGroup
                defaultValue={view}
                className="flex gap-4"
                onValueChange={value => push(`/${value}`)}
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem id="calendar" value="calendar" />
                    <Label htmlFor="calendar" className="flex items-center text-lg">
                        Calendario
                        <Calendar className="size-4" />
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem id="list" value="list" />
                    <Label htmlFor="list" className="flex items-center text-lg">
                        Lista
                        <List className="size-4" />
                    </Label>
                </div>
            </RadioGroup>
            <Button
                variant={"outline"}
                className="w-1/4"
                onClick={() => push("/create-training")}
            >
                Adicionar Treino
            </Button>
        </div>
    )
}
