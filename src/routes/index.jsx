import * as React from 'react'
import { BrowserRouter as Router, Redirect, Switch, Route, useHistory } from 'react-router-dom'
import LoginGG from '../pages/LoginGG';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import { useSelector, Provider } from 'react-redux';
import store from '../redux/store';


export const AppRouter = () => {

  const loginState = useSelector(store => store.isLogin)
  console.log(loginState)
  return (
    <Provider store={store}>
      <Router>
        {!loginState && <Redirect exact from="/" to="/login" />}
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
        <Login exact path="/login" component={LoginGG} />
      </Router>
    </Provider>
  )
}

