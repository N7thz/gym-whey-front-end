"use client"

import { UserResponse } from "@/@types"
import { useHttp } from "@/http/api"
import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { type ReactNode, createContext, useContext, useEffect } from "react"

export type CurrentUserContextProps = UseQueryResult<UserResponse>

const CurrentUserContext = createContext({} as CurrentUserContextProps)

export function CurrentUserProvider({ children }: { children: ReactNode }) {

    const { refresh } = useRouter()
    const http = useHttp()
    const token = getCookie("token")

    const queryKey = ["find-user", token]

    const response = useQuery({
        queryKey,
        queryFn: http.FindUser,
        refetchOnWindowFocus: false,
    })

    useEffect(() => {
        if (response.isError) refresh()
    }, [response.isError, refresh])

    const value: CurrentUserContextProps = response

    return (
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export const useCurrentUser = () => useContext(CurrentUserContext)
