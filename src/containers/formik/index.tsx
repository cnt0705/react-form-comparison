import React from 'react'
import { Formik, FormikConfig } from 'formik'

import { FormikPage } from 'components/formik'
import { FormValues } from 'types'
import { sleep } from 'utils'
import { validationSchema } from 'validations'

const initialValues: FormValues = {
  name: '',
  favorite: '',
  more: '',
}

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
