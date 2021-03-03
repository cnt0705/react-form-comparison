import React from 'react'
import { fireEvent, render, waitFor, screen } from '@testing-library/react'

import { FormikContainer } from '.'

describe('Formik Page', () => {
  describe('Submit button', () => {
    test('should be clickable at first', () => {
      render(<FormikContainer />)
      const button = screen.getByRole('button', { name: /submit/i })

      expect(button).not.toBeDisabled()
    })

    test('should not be clickable when the form is invalid', async () => {
      render(<FormikContainer />)
      const name = screen.getByTestId('name') as HTMLInputElement
      const button = screen.getByRole('button', { name: /submit/i })

      fireEvent.change(name, {
        target: { value: 'a' },
      })
      fireEvent.blur(name)

      await waitFor(() => expect(button).toBeDisabled())
    })

    test('should be clickable when the form is valid', async () => {
      render(<FormikContainer />)
      const name = screen.getByTestId('name') as HTMLInputElement
      const favorite = screen.getByTestId('favorite') as HTMLInputElement
      const more = screen.getByTestId('more') as HTMLInputElement
      const button = screen.getByRole('button', { name: /submit/i })

      fireEvent.change(name, {
        target: { value: 'username' },
      })
      fireEvent.change(favorite, {
        target: { favorite: 2 },
      })
      fireEvent.change(more, {
        target: { more: 'tell us more' },
      })
      fireEvent.blur(more)

      await waitFor(() => expect(button).not.toBeDisabled())
    })

    test('show loading icon when clicked', async () => {
      render(<FormikContainer />)
      const name = screen.getByTestId('name') as HTMLInputElement
      const favorite = screen.getByTestId('favorite') as HTMLInputElement
      const more = screen.getByTestId('more') as HTMLInputElement
      const button = screen.getByRole('button', { name: /submit/i })

      fireEvent.change(name, {
        target: { value: 'username' },
      })
      fireEvent.change(favorite, {
        target: { favorite: 2 },
      })
      fireEvent.change(more, {
        target: { more: 'tell us more' },
      })
      fireEvent.blur(more)
      fireEvent.click(button)

      await waitFor(() => expect(button).not.toHaveTextContent('Submit'))
    })
  })

  describe('Tell Us More', () => {
    test('must be entered letters or numbers', async () => {
      render(<FormikContainer />)
      const more = screen.getByTestId('more') as HTMLInputElement

      fireEvent.change(more, {
        target: { value: 'abc123' },
      })
      fireEvent.blur(more)

      await waitFor(() =>
        expect(
          screen.queryByText(/Must enter letters or numbers/i)
        ).not.toBeInTheDocument()
      )
    })

    test('must not be entered symbols', async () => {
      render(<FormikContainer />)
      const more = screen.getByTestId('more') as HTMLInputElement

      fireEvent.change(more, {
        target: { value: '...' },
      })
      fireEvent.blur(more)

      await waitFor(() =>
        expect(
          screen.queryByText(/Must enter letters or numbers/i)
        ).toBeInTheDocument()
      )
    })
  })
})
