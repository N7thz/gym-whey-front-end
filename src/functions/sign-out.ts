import { deleteCookie } from "cookies-next"

export function signOut(refresh: () => void) {
    deleteCookie("token")
    refresh()
}