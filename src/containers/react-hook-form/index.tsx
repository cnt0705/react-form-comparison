import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { ReactHookFormPage } from 'components/react-hook-form'
import { FormValues } from 'types'
import { sleep } from 'utils'

const initialValues: FormValues = {
  name: '',
  favorite: '',
  more: '',
}

const onSubmit: SubmitHandler<FormValues> = async data => {
  await sleep(1000)
  console.log(data)
}

export const ReactHookFormContainer = () => {
  const { handleSubmit, register, control, formState } = useForm<FormValues>({
    defaultValues: initialValues,
  })

  return (
    <ReactHookFormPage
      control={control}
      formState={formState}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
    />
  )
}
