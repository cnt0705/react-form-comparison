import React from 'react'
import { Formik, FormikConfig } from 'formik'
import * as yup from 'yup'

import { FormikPage } from 'components/formik'
import { FormValues } from 'types'
import { sleep } from 'utils'

const initialValues: FormValues = {
  name: '',
  favorite: '',
  more: '',
}

const validationSchema: FormikConfig<FormValues>['validationSchema'] = yup.object(
  {
    name: yup
      .string()
      .min(5, 'Must be 5 characters or more')
      .max(12, 'Must be 12 characters or less')
      .required('Required'),
    favorite: yup.number().required('Required'),
    more: yup
      .string()
      .matches(/^[a-zA-Z0-9]+$/, 'Must enter letters or numbers')
      .required('Required'),
  }
)

const onSubmit: FormikConfig<FormValues>['onSubmit'] = async (
  values,
  { setSubmitting }
) => {
  await sleep(1000)
  console.log(values)
  setSubmitting(false)
}

export const FormikContainer = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validateOnChange={false}
    validationSchema={validationSchema}
  >
    {({ ...props }) => <FormikPage {...props} />}
  </Formik>
)
