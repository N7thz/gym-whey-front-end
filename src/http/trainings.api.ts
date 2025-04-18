import { EditTrainingProps } from "@/schemas/edit-training-schema"
import { api } from "./api"
import type { Training as TrainingProps } from "@/@types"

type UpdateRequest = EditTrainingProps & {
    id: string
}

export class Training {

    private async create() {

        const { data } = await api.post<TrainingProps[]>("/trainings")

        return data
    }

    async findMany() {

        const { data } = await api.get<TrainingProps[]>("/trainings")

        return data
    }

    async update({ id, ...training }: UpdateRequest) {

        const url = `/trainings/${id}`

        const { data } = await api.put<TrainingProps>(url, training)

        return data
    }
}