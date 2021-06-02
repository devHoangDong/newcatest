import * as React from 'react'
import { useCallback } from 'react'

import { useKeycloak } from '@react-keycloak/web'

import { useAxios } from '../utils/hooks'
import '../index.css';
import { Provider, } from 'react-redux';
import App from '../App';
import store from '../redux/store';
import { BrowserRouter } from "react-router-dom";

const Home = () => {
  // const { keycloak } = useKeycloak()

  // const axiosInstance = useAxios('http://localhost:5000') // see https://github.com/panz3r/jwt-checker-server for a quick implementation
  // const callApi = useCallback(() => {
  //   !!axiosInstance.current && axiosInstance.current.get('/jwt/decode')
  // }, [axiosInstance])
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}
export default Home

