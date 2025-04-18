import { CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

type FormEditTrainingFooterProps = { isLoading: boolean }

export const FormEditTrainingFooter = ({
    isLoading
}: FormEditTrainingFooterProps) => {

    const { back } = useRouter()

    return (
        <CardFooter className="justify-end gap-2">
            <Button
                type="button"
                variant={"destructive"}
                className="w-1/2"
                onClick={back}
                disabled={isLoading}
                children={
                    isLoading ? "Carregando..." : "Voltar"
                }
            />
            <Button
                type="submit"
                className="w-1/2"
                disabled={isLoading}
                children={
                    isLoading ? "Carregando..." : "Confirmar"
                }
            />
        </CardFooter>
    )
}
