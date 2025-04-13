import { CalendarView } from "@/components/calendar/calendar-view"
import { ChangeView } from "@/components/change-view"
import { ListView } from "@/components/template/list/list-view"
import type { Metadata } from "next"

export type HomeParams = {
	params: {
		view: "calendar" | "list"
	}
}

export function generateMetadata({
	params: { view }
}: HomeParams): Metadata {
	return {
		title: `Whey Gym | ${view === "calendar" ? "Calendario" : "Home"}`
	}
}

export default function Home({ params: { view } }: HomeParams) {
	return (
		<div className="flex-1 justify-center items-center p-6 space-y-4">
			<ChangeView />
			{
				view === "calendar" ? <CalendarView /> : <ListView />
			}
		</div>
	)
}
