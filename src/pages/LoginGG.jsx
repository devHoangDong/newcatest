import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import s from './LoginGG.module.scss'
import { useGoogleAuth } from '../GoogleAuthen/index';

export default function LoginGG() {
    let history = useHistory();
    const handleClick = () => {
         history.push('/home')
    }
    const { signIn } = useGoogleAuth();
    const signup = (res) => { 
           const googleresponse = {
             Name: res.profileObj.name,
             email: res.profileObj.email,
             token: res.googleId,
             Image: res.profileObj.imageUrl,
             ProviderId: 'Google'
           };
           debugger;
           axios.post('http://portalbe.newca.vn/api/socialLogin', googleresponse)
             .then((result) => {
               let responseJson = result; 
               sessionStorage.setItem("userData", JSON.stringify(responseJson));
               handleClick();
             });
    };
           const responseGoogle = (response) => {
             console.log(response);
             var res = response.profileObj;
             console.log(res);
             debugger;
             signup(response);
           }
           return (
                <div className={`${s.wrapper} ${s.fadeInDown}`}>
                    <div id={s.formContent}>
                        {/* Tabs Titles */}
                        <h2 className={s.active}> Sign In </h2>
                        {/* Icon */}
                        <div className={`${s.fadeIn} ${s.first}`}>
                        </div>
                        {/* Login Form */}
                        <form>
                        <input type="text" id="login" className={`${s.fadeIn} ${s.second}`} name="login" placeholder="login" />
                        <input type="text" id="password" className={`${s.fadeIn} ${s.third}`} name="login" placeholder="password" />
                        <input type="submit" className={`${s.fadeIn} ${s.fourth}`} Value="Log In" />
                        
                        </form>
                        {/* Remind Passowrd */}
                        <div id={s.formFooter}>
                            <button onClick={signIn}><i class="fab fa-google"></i> Log In with Google</button>
                        </div>
                    </div>
                </div>

        //      <div className="App">
        //        <div className="row">
        //          <div className="col-sm-12 btn btn-info">
        //            Login With Google
        //            </div>
        //        </div>
        //        <div className="row">
        //          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
        //            <div className="col-sm-4"></div>
        //            <div className="col-sm-4">
        //              <GoogleLogin
        //                clientId="117400138061-qmmhcm296ol3tqa2tc0eq60a5j553c27.apps.googleusercontent.com"
        //                buttonText="Login with Google"
        //                onSuccess={responseGoogle}
        //                onFailure={responseGoogle} ></GoogleLogin>
        //            </div>
        //            <div className="col-sm-4"></div>
        //          </div>
        //        </div>
        //      </div>
           )
}
//    clientd ID 117400138061-qmmhcm296ol3tqa2tc0eq60a5j553c27.apps.googleusercontent.com
//    client Secret cxKJtey03bZ3CGsEb9rDk9XD
   