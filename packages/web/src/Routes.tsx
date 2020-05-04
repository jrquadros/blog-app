import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SignIn } from './pages/SignIn'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignIn} />
      </Switch>
    </BrowserRouter>
  )
}
