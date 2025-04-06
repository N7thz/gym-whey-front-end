"use client"

import { Check, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Task } from "@/@types"

interface TaskListProps {
    tasks: Task[]
    onToggleComplete: (id: string) => void
    onDelete: (id: string) => void
}

export function TaskList({ tasks, onToggleComplete, onDelete }: TaskListProps) {
    if (tasks.length === 0) {
        return <div className="text-center py-8 text-muted-foreground">No tasks scheduled for this day</div>
    }

    return (
        <div className="space-y-2">
            {tasks.map((task) => (
                <div key={task.id} className={`p-3 border rounded-md ${task.completed ? "bg-muted/50" : "bg-card"}`}>
                    <div className="flex items-start justify-between">
                        <div className={`flex-1 ${task.completed ? "line-through opacity-70" : ""}`}>
                            <h4 className="font-medium">{task.title}</h4>
                            {task.description && <p className="text-sm text-muted-foreground mt-1">{task.description}</p>}
                            <div className="text-xs text-muted-foreground mt-2">{task.time}</div>
                        </div>
                        <div className="flex space-x-1">
                            <Button variant="ghost" size="icon" onClick={() => onToggleComplete(task.id)} className="h-8 w-8">
                                <Check className={`h-4 w-4 ${task.completed ? "text-primary" : ""}`} />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => onDelete(task.id)}
                                className="h-8 w-8 text-destructive"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

