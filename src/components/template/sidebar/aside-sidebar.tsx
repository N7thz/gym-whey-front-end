import {
	Calendar,
	Search,
	Settings,
} from "lucide-react"
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
} from "@/components/ui/sidebar"
import { AsideSidebarItem } from "./aside-sidebar-item"
import { SidebarAvatar } from "./sidebar-avatar"
import type { Item } from "@/@types"

const items: Item[] = [
	{
		title: "Home",
		url: "/",
		Icon: Calendar,
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
