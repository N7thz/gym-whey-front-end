"use client"

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar } from "@/components/avatar"
import { useCurrentUser } from "@/providers/user-provider"
import { UserRound } from "lucide-react"

export const SidebarAvatar = () => {

    const { data: user, setIsOpen } = useCurrentUser()

    const Icon = (user && user.imageUrl) ? Avatar : UserRound

    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Icon
                                src={user?.imageUrl}
                                onClick={() => setIsOpen(isOpen => !isOpen)}
                            />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}