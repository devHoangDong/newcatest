import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'

const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({ children }) => {
    const GOOGLE_CLIENT_ID = '117400138061-odmb892plvium4fp9uabd5255bhm0ntg.apps.googleusercontent.com'
  const googleAuth = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID, // Your clientID from Google.
  })

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)
