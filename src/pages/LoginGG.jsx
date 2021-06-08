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
            console.log(googleUser)
        }
    }

    return (
        <div className={s.loginContainer}>
            <div className={s.loginContainer__head}>
                <h2>Newca</h2>
            </div>
            <div className={s.loginContainer__body}>
                <div className={s.loginContainer__body__right}>
                    <div className={s.imgCover}>
                        <img src="./image/newca.jpg"></img>
                    </div>
                </div>
                <div className={s.loginContainer__body__left}>
                    <div className={s.leftContainer}>
                        <div className={s.leftTitle}>
                            <h4>Hello</h4>
                        </div>
                        <div className={`${s.wrapper} ${s.fadeInDown}`}>
                            <div className={`${s.fadeIn} ${s.first}`}>
                                <button onClick={handleSignIn}><i class="fab fa-google"></i> Log In with Google</button>
                            </div>
                            <div className={`${s.fadeIn} ${s.first}`}>
                                <button type="button"><i class="fab fa-google"></i> Log In with KC</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

