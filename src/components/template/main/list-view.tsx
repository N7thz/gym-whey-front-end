import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ListViewLoading } from "./main-list-loading"
import { useHttp } from "@/http/api"
import { useQuery } from "@tanstack/react-query"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export const ListView = () => {

	const http = useHttp()

	const { data: trainings, isLoading } = useQuery({
		queryKey: ["find-many-trainings-by-user-id"],
		queryFn: () => http.training.findMany()
	})


	if (!trainings || isLoading) return <ListViewLoading />

	return (
		<Card className="space-y-3">
			<CardHeader>
				<Label
					htmlFor="search_input"
					className="flex items-center gap-2"
				>
					<Input
						id="search_input"
						type="search"
					/>
					<Search />
				</Label>
			</CardHeader>
			<CardContent className="space-y-5">
				{
					trainings.map(({ id, name, exercises }) => (
						<Card key={id}>
							{id}
							<div className="block">
								{
									JSON.stringify(exercises, null, 2)
								}
							</div>
						</Card>
					))
				}
			</CardContent>
		</Card>
	)
}
