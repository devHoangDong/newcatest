import React from 'react';
import { Route, Redirect, useHistory, history } from 'react-router-dom';
import { useGoogleAuth } from "../GoogleAuthen";
import { useSelector } from 'react-redux';
const PrivateRoute = ({ component: Component, ...rest }) => {

    const loginState = useSelector(store => store.isLogin)

    return (
        <div>
            <Route {...rest} render={props => (
                loginState ?
                    (<Component {...props} />) :
                    <Redirect to="/login" />
            )} />
        </div>
    );
};

export default PrivateRoute;