import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { FormikContainer } from 'containers/formik'

export const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/formik">Formik</Link>
        </li>
        <li>
          <Link to="/react-hook-form">React Hook Form</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/formik">
          <FormikContainer />
        </Route>
      </Switch>
    </Router>
  )
}
