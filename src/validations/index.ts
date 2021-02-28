import * as yup from 'yup'

export const validationSchema = yup.object({
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
})
