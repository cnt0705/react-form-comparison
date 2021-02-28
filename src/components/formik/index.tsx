import React from 'react'
import { Button, Container, Grid, MenuItem, TextField } from '@material-ui/core'

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

export const FormikPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <form action="">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <TextField id="name" label="Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id="favorite" label="What You Like" fullWidth select>
              {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}
