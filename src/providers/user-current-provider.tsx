"use client"

import { UserResponse } from "@/@types"
import { useHttp } from "@/http/api"
import { decodeToken } from "@/utils/decode-token"
import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react"

export type CurrentUserContextProps = UseQueryResult<UserResponse> & {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const CurrentUserContext = createContext({} as CurrentUserContextProps)

export function CurrentUserProvider({ children }: { children: ReactNode }) {

    const [isOpen, setIsOpen] = useState(false)

    const { refresh } = useRouter()
    const http = useHttp()
    const token = getCookie("token")
    const id = decodeToken(token)
    
    const response = useQuery({
        queryKey: ["find-user", id],
        queryFn: http.authenticate.authenticate,
        refetchOnWindowFocus: false,
    })

    console.log(response.status)

    useEffect(() => refreshQuery(), [])

    function refreshQuery() {
        if (response.status === "error") {
            refresh()
        }
    }

    const value: CurrentUserContextProps = {
        ...response,
        isOpen,
        setIsOpen,
    }

    return (
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export const useCurrentUser = () => useContext(CurrentUserContext)
