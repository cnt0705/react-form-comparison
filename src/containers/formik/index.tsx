import React from 'react'
import { Formik, FormikConfig } from 'formik'

import { FormikPage } from 'components/formik'
import { FormValues } from 'types'

const initialValues: FormValues = {
  name: '',
  favorite: '',
}

const onSubmit: FormikConfig<FormValues>['onSubmit'] = (
  values,
  { setSubmitting }
) => {
  setTimeout(() => {
    console.log(values)
    setSubmitting(false)
  }, 1000)
}

export const FormikContainer = () => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({ ...props }) => <FormikPage {...props} />}
  </Formik>
)
