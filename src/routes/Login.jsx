import React from 'react';
import { Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import { useGoogleAuth } from "../GoogleAuthen";
import { useSelector } from 'react-redux';

const Login = ({ component: Component, ...rest }) => {

    const loginState = useSelector(store => store.isLogin)

    return (
        <div>
            <Route {...rest} render={props => (
                !loginState ?
                    (<Component {...props} />) :
                    (<Redirect to="/" />)
            )} />
        </div>
    );
};

export default Login;
