import { UserResponse } from "@/@types"
import { api } from "./api"
import type { SigninProps as SigninRequest } from "@/schemas/sign-in-schema"

type SigninResponse = { acess_token: string }

export class Authenticate {

    async authenticate() {

        const { data } = await api.get<UserResponse>("/authenticate")

        return data
    }

    signIn({ email, password }: SigninRequest) {
        return api.post<SigninResponse>("/authenticate", { email, password })
    }
}