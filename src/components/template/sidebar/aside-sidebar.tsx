import {
	Calendar,
	Search,
	Settings,
	UserRoundPlus,
	UsersRound,
} from "lucide-react"
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar"
import { AsideSidebarItem } from "./aside-sidebar-item"
import { Avatar } from "@/components/avatar"
import type { Item } from "@/@types"
import { SidebarAvatar } from "./sidebar-avatar"

const items: Item[] = [
	{
		title: "Home",
		url: "/",
		Icon: Calendar,
	},
	{
		title: "Criar novo usuário",
		url: "/create-account",
		Icon: UserRoundPlus,
	},
	{
		title: "Lista de usuários",
		url: "/users",
		Icon: UsersRound,
	},
	{
		title: "Search",
		url: "#",
		Icon: Search,
	},
	{
		title: "Settings",
		url: "/settings",
		Icon: Settings,
	},
]

export const AsideSidebar = () => {
	return (
		<Sidebar collapsible="icon">
			<SidebarContent className="bg-background justify-between">
				<SidebarGroup>
					<SidebarGroupLabel className="text-base font-light">
						Opções do aplicativo
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{
								items.map(item => (
									<AsideSidebarItem
										key={item.title}
										item={item}
									/>
								))
							}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarAvatar />
			</SidebarContent>
		</Sidebar>
	)
}
