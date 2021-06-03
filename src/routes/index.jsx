import * as React from 'react'
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import LoginGG from '../pages/LoginGG';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';
import Login from './Login';

export const AppRouter = () => {
  const loginToken = localStorage.getItem('userGG');
  console.log(loginToken)
  
  return (
    <Router>
      {!loginToken && <Redirect exact from="/" to="/login" />}
      <Switch>             
      <PrivateRoute exact path="/" component={Home} /> 
      <PrivateRoute path="/" component={Home} />
      </Switch>                
      <Login exact path="/login" component={LoginGG} />
    </Router>
  )
}

