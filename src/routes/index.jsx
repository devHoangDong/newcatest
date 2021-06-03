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
<<<<<<< Updated upstream:src/routes/index.tsx
      <Switch>
        <PrivateRoute exact path="/" component={Home} /> 
        <PrivateRoute path="/" component={Home} />
      <Switch/>
=======
      <Switch>             
      <PrivateRoute exact path="/" component={Home} /> 
      <PrivateRoute path="/" component={Home} />
      </Switch>                
>>>>>>> Stashed changes:src/routes/index.jsx
      <Login exact path="/login" component={LoginGG} />
    </Router>
  )
}

