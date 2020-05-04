import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { IsAuth } from './Utils'
import { SignIn } from './pages/SignIn'
import { Home } from './pages/Home'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" render={() => (IsAuth() ? <Home /> : <Redirect to={'/'} />)} />
        <Route path="/" component={SignIn} />
      </Switch>
    </BrowserRouter>
  )
}
