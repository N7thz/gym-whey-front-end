import { Card } from "@/components/ui/card"
import type { MainProps } from "./main-layout"
import { MainListLoading } from "./main-list-loading"

export const MainList = ({ data: trainings, isLoading }: MainProps) => {

	if (!trainings || isLoading) return <MainListLoading />

	return (
		<div className="space-y-3">
			<div className="space-y-5">
				{trainings.map(({ id, name }) => (
					<Card key={id}>{id}</Card>
				))}
			</div>
		</div>
	)
}
