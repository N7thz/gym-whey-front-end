"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FormEditTraining } from "./forms/form-edit-training"
import { api } from "@/http/api"

export const GetTrainingById = ({ id }: { id: string }) => {

    const { data: training, isLoading } = useQuery<any>({
        queryKey: ["find-training-by-id", id],
        queryFn: async () => {

            const { data } = await api.get(`/trainings/${id}`)

            return data
        },
    })

    if (!training || isLoading) return <p>Carregando...</p>

    return (
        <FormEditTraining training={training} />
    )
}
