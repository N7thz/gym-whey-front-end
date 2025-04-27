"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ListViewLoading } from "./list-view-loading"
import { useHttp } from "@/http/api"
import { useQuery } from "@tanstack/react-query"
import { FormSearchTrainings } from "@/components/forms/form-search-trainings"
import { QueryKeys } from "@/lib/query-keys"

export const ListView = () => {

	const http = useHttp()
	const queryKey = QueryKeys()

	const { data: trainings, isLoading } = useQuery({
		queryKey: queryKey.findManyTrainingsByUserId(),
		queryFn: () => http.training.findMany()
	})


	if (!trainings || isLoading) return <ListViewLoading />

	return (
		<Card className="space-y-3">
			<CardHeader>
				<FormSearchTrainings defaultTrainings={trainings} />
			</CardHeader>
			<CardContent className="space-y-5">
				{
					trainings.map(({ id, exercises }) => (
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
