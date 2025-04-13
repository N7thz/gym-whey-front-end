import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger
} from "@/components/ui/dialog"
import { useState } from "react"
import { TrainingWithExercise } from "@/@types"
import {
    Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

type FormSearchTrainingsProps = {
    defaultTrainings: TrainingWithExercise[]
}

export const FormSearchTrainings = ({
    defaultTrainings
}: FormSearchTrainingsProps) => {

    const [
        trainings,
        setTrainings
    ] = useState<TrainingWithExercise[]>(defaultTrainings)

    return (
        <Dialog>
            <DialogTrigger>
                <Input
                    placeholder="Pesquise por um treino..."
                    readOnly
                />
            </DialogTrigger>
            <DialogContent className="sm:max-w-none sm:max-h-5/6 sm:w-1/2">
                <DialogTitle children={"Treinos"} />
                <form className="flex items-center gap-2" >
                    <Label
                        htmlFor="search_input"
                        className="w-full"
                    >
                        <Input
                            id="search_input"
                            type="search"
                            placeholder="Pesquise por um treino..."
                        />
                        <Button
                            type="submit"
                            size={"icon"}
                        >
                            <Search />
                        </Button>
                    </Label>
                </form>
                <ScrollArea className="w-full min-h-6/10">
                    <DialogFooter>
                        <Card className="w-full">
                            <CardContent className="space-y-2 grid grid-cols-3 gap-2">
                                {
                                    trainings.map(({ id, name, madeAt }) => (
                                        <Card
                                            key={id}
                                            className="h-20"
                                        >
                                            <CardHeader>
                                                <CardTitle
                                                    className="truncate"
                                                    children={name}
                                                />
                                                <CardDescription
                                                    children={format(madeAt, "dd/MM/yyyy", { locale: ptBR })}
                                                />
                                            </CardHeader>
                                        </Card>
                                    ))
                                }
                            </CardContent>
                        </Card>
                    </DialogFooter>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}