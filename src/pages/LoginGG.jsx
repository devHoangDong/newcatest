import axios from 'axios';
import React from 'react';
import { useGoogleAuth } from '../GoogleAuthen/index';
import s from './LoginGG.module.scss';
import userApi from "../api/userApi";
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/loginSlice';

export default function LoginGG() {

    const { signIn } = useGoogleAuth();
    const dispatch = useDispatch()

    const handleSignIn = async () => {
        signIn();
        const googleUser = await signIn();
        if (googleUser) {
            localStorage.setItem('userGG', JSON.stringify(googleUser));
        }
        if (googleUser) { dispatch(setLogin({ logged: true })) };
    }
    const tokenSignIn = async () => {
        let user = null;
        var requestOptions = {
            method: 'GET',
            credentials: 'include',
            redirect: 'follow'
        };

        await fetch("https://logintoken.up.newca.vn/", requestOptions)
            .then(response => response.json())
            .then(result => {
                user = (result)
                localStorage.setItem('userToken', user);
            })
            .catch(error => console.log('error', error));
        if (user) { dispatch(setLogin({ logged: true })) }

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
                            <h4>Xin chào, hãy vui lòng đăng nhập</h4>
                        </div>
                        <div className={`${s.wrapper} ${s.fadeInDown}`}>
                            <div className={`${s.fadeIn} ${s.first}`}>
                                <button onClick={handleSignIn}><i className="fab fa-google"></i> Đăng nhập bằng Google
                                </button>
                            </div>
                            <div className={`${s.fadeIn} ${s.first}`}>
                                <button type="button" onClick={tokenSignIn}><i className="fab fa-google"></i> Đăng nhập bằng Token</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

