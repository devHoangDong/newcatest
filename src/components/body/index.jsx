import React from 'react';
import '../../scss/body.scss'
import PageLoading from './FullpageLoading';
import router from '../../router';
import Home from './home/index';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import TopNav from './home/topNav';

const Body = () => {
  return (
    <div className="myBody">
      <TopNav />
      <Switch>
        {
          router.map((item, index) => {
            const { Component } = item
            return (
              <Route path={item.path} exact={item.exact} key={index}>
                <Component />
              </Route>
            )
          })
        }
        <Route path="/" component={Home} />
      </Switch>
      <PageLoading />
    </div>
  )
}

export default Body
