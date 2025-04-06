import { api } from "./api"
import { TrainingWithExercise, type GetResponse } from "@/@types"

export async function FindManyTrainigsByUserId() {

    const { data } = await api.get<TrainingWithExercise>("/trainings")

    return data
}
