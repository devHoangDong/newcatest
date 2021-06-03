import React from 'react';
import '../../scss/body.scss'
import PageLoading from './FullpageLoading';
import router from '../../router';
<<<<<<< Updated upstream
import Home from './home/index'
=======
import Home from './home/index';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <Route path="/" component={Home} />
=======
        <Route path ="/" component={Home} />
>>>>>>> Stashed changes
      </Switch>
      <PageLoading />
    </div>
  )
}

export default Body
