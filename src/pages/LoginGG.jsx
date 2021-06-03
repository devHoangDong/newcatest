import axios from 'axios';
import React from 'react';
import { useGoogleAuth } from '../GoogleAuthen/index';
import s from './LoginGG.module.scss';

export default function LoginGG() {
    const { signIn } = useGoogleAuth();
    console.log(useGoogleAuth())
    const handleSignIn = async () => {
        signIn();
        const googleUser = await signIn();
        if (googleUser) {
        localStorage.setItem('userGG', JSON.stringify(googleUser.accessToken));
        console.log(googleUser)}
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
                        <div id={s.formFooter}>
                            <button onClick={handleSignIn}><i class="fab fa-google"></i> Log In with Google</button>
                        </div>
                    </div>
                </div>
           )
}

   