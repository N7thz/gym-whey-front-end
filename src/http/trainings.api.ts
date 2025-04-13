import { api } from "./api"
import { TrainingWithExercise, type GetResponse } from "@/@types"

export class Training {

    async findMany() {

        const { data } = await api.get<TrainingWithExercise>("/trainings")

        return data
    }
}