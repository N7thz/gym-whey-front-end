import { UserResponse } from "@/@types"
import { api } from "./api"
import type { CreateAccountProps } from "@/schemas/create-account-schema"

type CreateAccountRequest = Omit<CreateAccountProps, "confirm_password">

type UpdateUserRequest = Partial<UserResponse> & { id: string }

export class User {

    async create({ email, password }: CreateAccountRequest) {

        const { data } = await api.post<UserResponse>("/create-account", {
            email,
            password
        })

        return data
    }

    async update({ email, imageUrl, id }: UpdateUserRequest) {

        const { data } = await api.put<UserResponse>(`/users/${id}`, {
            email,
            imageUrl
        })

        return data
    }

    async remove(id: string) {

        const { data } = await api.delete<UserResponse>(`/users/${id}`)

        return data
    }
}