import type { UserResponse } from "@/@types"
import { api } from "./api"

type UpdateUserRequest = Partial<UserResponse> & {
    id: string
}

export function UpdateUser({ email, id }: UpdateUserRequest) {
    return api.put<UserResponse>(`/users/${id}`, { email })
}
