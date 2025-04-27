"use client"

import { useQuery } from "@tanstack/react-query"
import { FormEditTraining } from "./forms/form-edit-training"
import { api } from "@/http/api"
import { QueryKeys } from "@/lib/query-keys"
import { Training } from "@/@types"

export const GetTrainingById = ({ id }: { id: string }) => {

    const queryKeys = QueryKeys()

    const { data: training, isLoading } = useQuery({
        queryKey: queryKeys.findTrainingById(id),
        queryFn: async () => {

            const { data } = await api.get<Training>(`/trainings/${id}`)

            return data
        },
    })

    if (!training || isLoading) return <p>Carregando...</p>

    return (
        <FormEditTraining training={training} />
    )
}
