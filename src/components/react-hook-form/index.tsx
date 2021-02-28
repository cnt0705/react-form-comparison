import React from 'react'
import {
  Button,
  Container,
  Grid,
  TextField,
  MenuItem,
  CircularProgress,
} from '@material-ui/core'
import { SubmitHandler, UseFormMethods, Controller } from 'react-hook-form'

import { FormValues } from 'types'

type ReactHookFormProps = Pick<
  UseFormMethods,
  'handleSubmit' | 'register' | 'control' | 'formState'
>

type Props = ReactHookFormProps & {
  onSubmit: SubmitHandler<FormValues>
}

const options = [
  {
    value: 1,
    label: 'Watching K-drama',
  },
  {
    value: 2,
    label: 'Hanging out with my friend',
  },
  {
    value: 3,
    label: 'Staying at home',
  },
]

export const ReactHookFormPage: React.FC<Props> = ({
  control,
  formState,
  handleSubmit,
  onSubmit,
  register,
}) => {
  const { isSubmitting } = formState

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              inputRef={register}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="favorite"
              control={control}
              as={
                <TextField
                  label="What You Like"
                  fullWidth
                  select
                  variant="outlined"
                >
                  {options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="more"
              label="Tell Us More"
              inputRef={register}
              fullWidth
              multiline
              rows={5}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <CircularProgress size={25} color="secondary" />
              ) : (
                'Submit'
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}
