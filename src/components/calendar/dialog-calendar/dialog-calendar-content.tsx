import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import type { TrainingWithExercise } from "@/@types"
import { ExercisesItem } from "./exercises-item"
import { DialogCalendarFooter } from "./dialog-calendar-footer"

type DialogCalendarContentProps = {
  trainings: TrainingWithExercise[]
}

export const DialogCalendarContent = ({
  trainings
}: DialogCalendarContentProps) => {
  return (
    <>
      {
        trainings.length === 0 ? null : trainings.map(training => {
          
          const { id, name, obs, exercises } = training

          return (
            <DialogContent key={id}>
              <DialogTitle>
                {name}
              </DialogTitle>
              {obs && <DialogDescription>{obs}</DialogDescription>}
              <div className="space-y-4">
                {
                  exercises.map(({ id, ...exercise }) => (
                    <ExercisesItem
                      key={id}
                      exercise={exercise}
                    />
                  ))
                }
              </div>
              <DialogCalendarFooter id={id} />
            </DialogContent>
          )
        })
      }
    </>
  )
}
