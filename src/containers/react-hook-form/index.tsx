import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { ReactHookFormPage } from 'components/react-hook-form'
import { FormValues } from 'types'
import { sleep } from 'utils'
import { validationSchema } from 'validations'

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
  const methods = useForm<FormValues>({
    defaultValues: initialValues,
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  })

  return <ReactHookFormPage methods={methods} onSubmit={onSubmit} />
}
