"use client"

import { Moon, Sun, LaptopMinimal } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const ModeToggle = () => {

    const { setTheme } = useTheme()

    function setCurrentTheme(theme: "light" | "dark" | "system") {
        setTheme(theme)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setCurrentTheme("light")}>
                    <Sun />
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCurrentTheme("dark")}>
                    <Moon />
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCurrentTheme("system")}>
                    <LaptopMinimal />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
