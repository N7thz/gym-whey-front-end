import { UserResponse } from "@/@types"
import { api } from "./api"
import type { CreateAccountProps } from "@/schemas/create-account-schema"

type CreateAccountRequest = Omit<CreateAccountProps, "confirm_password">

export async function CreateAccount({ email, password }: CreateAccountRequest) {

    const { data } = await api.post<UserResponse>("/create-account", {
        email,
        password
    })

    return data
}