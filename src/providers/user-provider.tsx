"use client"

import { UserResponse } from "@/@types"
import { useHttp } from "@/http/api"
import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { 
    Dispatch,
    type ReactNode, SetStateAction, createContext, useContext, useEffect, useState 
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

    const queryKey = ["find-user", token]

    const response = useQuery({
        queryKey,
        queryFn: http.FindUser,
        refetchOnWindowFocus: false,
    })

    useEffect(() => {
        if (response.isError) refresh()
    }, [response.isError, refresh])

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
