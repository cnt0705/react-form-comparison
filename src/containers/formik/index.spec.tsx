import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { FormikContainer } from '.'

test('Formik', () => {
  render(<FormikContainer />)
})
