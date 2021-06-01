import React from 'react';
import '../../scss/body.scss'
import PageLoading from './FullpageLoading';
import router from '../../routes/router';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

const Body = () => {
  return (
    <div className="myBody">
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
      </Switch>
      <PageLoading />
    </div>
  )
}

export default Body
