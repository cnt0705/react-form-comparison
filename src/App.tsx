import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { CssBaseline } from '@material-ui/core'

import { FormikContainer } from 'containers/formik'

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/formik">
            <FormikContainer />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
