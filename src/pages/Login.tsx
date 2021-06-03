import * as React from 'react'
import { useCallback,useEffect } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'

const LoginPage = () => {
  const location = useLocation<{ [key: string]: unknown }>()
  const currentLocationState = location.state || {
    from: { pathname: '/home' },
  }
  const { keycloak } = useKeycloak()
  const login = useCallback(() => {
    keycloak?.login()
  }, [keycloak])
  const loginToken = (()=>{
    window.location.href='https://logintoken.up.newca.vn/'
  })
  if (keycloak?.authenticated)
    return <Redirect to={currentLocationState?.from as string} />

  return (
    <div>
      <button type="button" onClick={login}>
        Login KC
      </button>
      <button type="button" onClick={loginToken}>
        Login with Token
      </button>
    </div>
  )
}

export default LoginPage
