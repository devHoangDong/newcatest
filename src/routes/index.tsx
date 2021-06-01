import * as React from 'react'
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import LoginGG from '../pages/LoginGG';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';
import Login from './Login';

export const AppRouter = () => {
  return (
    <Router>
      <Redirect exact from="/" to="/login" />
      <PrivateRoute path="/home" component={Home} />                
      <Login path="/login" component={LoginGG} />
        {/* <Route exact path='/' component={LoginGG} /> 
        <Route path="/home" component={Home} /> */}
    </Router>
  )
}

