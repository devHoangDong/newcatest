import * as React from 'react'
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import LoginGG from '../pages/LoginGG';
import Home from '../pages/Home';

export const AppRouter = () => {
  return (
    <Router>
        <Route exact path='/' component={LoginGG} /> 
        <Route path="/home" component={Home} />
    </Router>
  )
}

