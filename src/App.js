import React from 'react';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scss/bodyContainer.css'
import Body from './components/body/index';
import Header from './components/header/Header';
import Footer from './components/footer/index';
import { BackTop } from 'antd';
import { BrowserRouter as Router, HashRouter,
  Link,
  Switch,
  Route
 } from 'react-router-dom';
import Home from './components/body/home/index';
import Account from './components/body/account/index'

const App = () => {
  return (
    <Router>
      <div className="bodyContainer">
        <Header/>
        <Body/>
      </div>
      <Footer/>
      <BackTop>
        <div className="backTop"><i className="fas fa-arrow-up" style={{fontSize: '25px'}}></i></div>
      </BackTop>
    </Router>
  );
}

export default App;
