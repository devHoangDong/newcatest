import React from 'react';
import {Route, Redirect, useLocation} from 'react-router-dom';
import { useGoogleAuth } from "../GoogleAuthen";

const Login = ({component: Component, ...rest}) => {

    const { isSignedIn } = useGoogleAuth();
    const { googleUser } = useGoogleAuth();
    const loginToken = localStorage.getItem('userGG');
    console.log(loginToken)

    return (
        <div>
            <Route {...rest} render={props => (
                !loginToken ?
                (<Component {...props} />) : 
            (<Redirect to="/" />)
            )} />    
        </div>
    );
};

export default Login;
