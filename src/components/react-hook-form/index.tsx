import React from 'react'
import { Button, Container, Grid, TextField } from '@material-ui/core'

import { Options } from 'components/select-box-option'

export const ReactHookFormPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <form>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <TextField
              id="name"
              name="name"
              label="Name"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="favorite"
              name="favorite"
              label="What You Like"
              fullWidth
              select
              variant="outlined"
            >
              <Options />
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="more"
              name="more"
              label="Tell Us More"
              fullWidth
              multiline
              rows={5}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}
