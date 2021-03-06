import React from 'react'
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  TextField,
} from '@material-ui/core'
import { FormikProps } from 'formik'

import { FormValues } from 'types'

type Props = FormikProps<FormValues>

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

export const FormikPage: React.VFC<Props> = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  isValid,
  touched,
  values,
}) => {
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <TextField
              id="name"
              name="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              fullWidth
              variant="outlined"
              inputProps={{
                'data-testid': 'name',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="favorite"
              name="favorite"
              label="What You Like"
              value={values.favorite}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.favorite && Boolean(errors.favorite)}
              helperText={touched.favorite && errors.favorite}
              fullWidth
              select
              variant="outlined"
              inputProps={{
                'data-testid': 'favorite',
              }}
            >
              {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="more"
              name="more"
              label="Tell Us More"
              value={values.more}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.more && Boolean(errors.more)}
              helperText={touched.more && errors.more}
              fullWidth
              multiline
              rows={5}
              variant="outlined"
              inputProps={{
                'data-testid': 'more',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting ? <CircularProgress size={25} /> : 'Submit'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}
