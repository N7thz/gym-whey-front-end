import {
    type UploadImageProps, UploadImageSchema,
} from "@/schemas/upload-image-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useHttp } from "@/http/api"
import { toast } from "@/components/toast"
import Icon from "@/app/icon.png"
import { useMutation } from "@tanstack/react-query"

export type FormUploadImageProps = {
    id: string
    oldImage: string | null
    setIsOpen: (open: boolean) => void
}

export function useUploadImage({
    id, oldImage, setIsOpen
}: FormUploadImageProps) {

    const http = useHttp()
    const refresh = () => window.location.reload()

    const {
        watch,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<UploadImageProps>({
        resolver: zodResolver(UploadImageSchema)
    })

    const imageUrl = watch("imageUrl")

    const { success } = UploadImageSchema.safeParse({ imageUrl })

    const image = (oldImage && !imageUrl)
        ? oldImage
        : success
            ? imageUrl
            : Icon


    const { mutate } = useMutation({
        mutationKey: ["upload-image"],
        mutationFn: ({ imageUrl }: UploadImageProps) => http.user.update({
            id, imageUrl
        }),
        onSuccess: (() => {

            setIsOpen(false)

            toast({
                title: "Imagem alterada com sucesso",
                variant: "sucess",
                position: "bottom-left"
            })

            setTimeout(() => refresh(), 2000)
        }),
        onError: (({ message }) => {
            console.log(message)

            reset({ imageUrl: oldImage ? oldImage : undefined })

            toast({
                title: "Erro ao atualizar a imagem.",
                variant: "error",
                position: "bottom-left"
            })
        })
    })

    const isLoading = status === "pending" || status === "success"

    function onSubmit({ imageUrl }: UploadImageProps) {
        mutate({ imageUrl })
    }

    return {
        image,
        imageUrl,
        errors,
        handleSubmit,
        onSubmit,
        register,
        isLoading
    }
}
