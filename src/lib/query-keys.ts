export function QueryKeys() {
    return {
        findTrainingById: (id: string) => ["find-training-by-id", id] as const,
        findManyTrainingsByUserId: () => ["find-many-trainings-by-user-id"] as const,
        findUser: (id: string | undefined) => ["find-user", id]as const,
    }
}