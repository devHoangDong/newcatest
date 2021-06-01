import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useGoogleAuth } from "../GoogleAuthen";

const PrivateRoute = ({component: Component, ...rest}) => {

    const { isSignedIn } = useGoogleAuth();

    return (
        <div>
            <Route {...rest} render={props => (
                isSignedIn ?
                <Component {...props} />: 
                <Redirect exact from="/home" to="/login" />
            )} />
        </div>
    );
};

export default PrivateRoute;