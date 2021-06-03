import React from 'react';
import { useGoogleLogin } from 'react-use-googlelogin';


const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({ children }) => {
    const GOOGLE_CLIENT_ID = '117400138061-jjrft3golf8phm2meimi341nck47ta5v.apps.googleusercontent.com'
    // const GOOGLE_CLIENT_ID = '117400138061-qmmhcm296ol3tqa2tc0eq60a5j553c27.apps.googleusercontent.com'
    const googleAuth = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID, // Your clientID from Google.
    isSignedIn: true
    })
         
  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)