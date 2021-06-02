import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useGoogleAuth } from "../GoogleAuthen";

const PrivateRoute = ({component: Component, ...rest}) => {

    const { isSignedIn } = useGoogleAuth();
    const loginToken = localStorage.getItem('userGG');
    
    return (
        <div>
            <Route {...rest} render={props => (
                loginToken ?
                (<Component {...props} />) : 
                <Redirect to="/login" />
            )} />
        </div>
    );
};

export default PrivateRoute;