"use client"

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useCurrentUser } from "@/providers/user-provider"
import { UserRound } from "lucide-react"

export const SidebarAvatar = () => {

    const { setIsOpen } = useCurrentUser()

    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            onClick={() => setIsOpen(isOpen => !isOpen)}
                            className="object-cover rounded-full"
                        >
                            <UserRound />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}