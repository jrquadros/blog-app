import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { IsAuth } from './Utils'
import { SignIn } from './pages/SignIn'
import { Home } from './pages/Home'
import { Register } from './pages/Register'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" render={() => (IsAuth() ? <Redirect to="/" /> : <Register />)} />
        <Route exact path="/" render={() => (IsAuth() ? <Home /> : <Redirect to={'/login'} />)} />
        <Route path="/login" render={() => (IsAuth() ? <Redirect to="/" /> : <SignIn />)} />
      </Switch>
    </BrowserRouter>
  )
}
