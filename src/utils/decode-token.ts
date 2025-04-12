import { CookieValueTypes } from "cookies-next"
import { jwtDecode } from "jwt-decode"

export type Payload = {
    sub: {
        id: string
        role: "CLIENT" | "ADMIN"
    }
}

export function decodeToken(token: CookieValueTypes) {

    if (!token) return undefined

    const { sub: { id } } = jwtDecode(token) as Payload

    return id
}