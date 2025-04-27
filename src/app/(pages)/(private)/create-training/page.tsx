import { FormCreateTraining } from "@/components/forms/form-create-training"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Metadata } from "next"
import { Form } from "react-hook-form"

export const metadata: Metadata = {
    title: "Whey Gym | Criação de Treino",
}

export default function CreateTraining() {
    return (
        <div className="flex-1 justify-center items-center p-6 space-y-4">
            <Card className="border-none shadow-none">
                <CardHeader>
                    <CardTitle className="text-3xl">
                        Criação de Treino
                    </CardTitle>
                    <CardDescription >
                        Preencha os campos abaixo para criar um novo treino.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FormCreateTraining />
                </CardContent>
            </Card>
        </div>
    )
}