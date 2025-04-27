"use client"

import { Form } from "@/components/forms/form-primitive"
import { useForm } from "react-hook-form"

export const FormCreateTraining = () => {

  const methods = useForm()

  const { handleSubmit } = methods

  function onSubmit(data: any) {
    console.log(data)
  }

  return (
    <Form
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
    >
      
    </Form>
  )
}
