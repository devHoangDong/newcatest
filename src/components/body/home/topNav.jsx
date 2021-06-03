import { format } from 'date-fns'
import '../../../scss/topnav.scss'
import {
    BrowserRouter as Router, Link, Route, Switch, useRouteMatch
  } from 'react-router-dom';
  import * as React from 'react'
  import { useCallback } from 'react'
  import { useAxios } from '../../../utils/hooks'
  import { useGoogleAuth } from '../../../GoogleAuthen';
  import { useHistory } from "react-router-dom";


  
const d = format(new Date(), 'do MMMM yyyy')
export default function TopNav() {
  const history = useHistory();
  const EditAccount = () => {
    history.push('/account/editAccount')
  }
  const EditPassword = () => {
    history.push('/account/editPassword')
  }
  const { signOut } = useGoogleAuth();
  const { googleUser } = useGoogleAuth();
  let username = '';
  let avatar = '';
  if (googleUser) {
    username = `${googleUser.profileObj.givenName} ${googleUser.profileObj.familyName}`;
    avatar = googleUser.profileObj.imageUrl;
  }
  const handleSignOut = () => {
    signOut();
    localStorage.clear();
  }
  console.log(googleUser)
  
    return (
        <div className="topNav">
            <div className="topNav__left">
                <p className="topNav__left__title">Dashboard Overview</p>
                <p>Today, {d}</p>
            </div>
            <div className="topNav__right">
              <div className="topNav__right__avatar">
                <div className="topNav__right__userName">
                  <div className="userName__thumb">{username}&nbsp;<i class="far fa-angle-down"></i></div>
                  <div className="thumb__editAccount">
                      <p onClick={() => EditAccount()}>Sửa thông tin</p>
                      <p onClick={() => EditPassword()}>Đổi mật khẩu</p>
                      <p onClick={() => handleSignOut()}>
                        Đăng xuất
                      </p>
                  </div>
                </div>
                <div className="userAvatar">
                  <img src={avatar} alt="logo-mini"></img>
                </div>
              </div>
        </div>
        </div>
    )
}



