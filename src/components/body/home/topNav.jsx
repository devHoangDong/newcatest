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
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';



const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

const d = format(new Date(), 'do MMMM yyyy')
export default function TopNav() {
  const history = useHistory();
  const EditAccount = () => {
    history.push('/account/editAccount')
  }
  const Cart = () => {
    history.push('/dathang')
  }
  const Affiliate = () => {
    history.push('//account/affiliate')
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
    // signOut();
    localStorage.clear();
    history.push("/login")
  }
  console.log(googleUser)
  const listCart = useSelector(store => store.Cart)
  return (
    <div className="topNav">
      <div className="topNav__left">
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <div className="topNav__left__cart">
          <i class="fas fa-shopping-cart fa-lg"></i><span className="icon-cart bg-color white total_items">{listCart ? listCart.length : '0'}</span>
        </div>
      </div>
      <div className="topNav__right">
        <div className="topNav__right__avatar">
          <div className="topNav__right__userName">
            <div className="userName__thumb">{username}&nbsp;<i class="far fa-angle-down"></i></div>
            <div className="thumb__editAccount">
              <p onClick={() => EditAccount()}>Th??ng tin t??i kho???n</p>
              <p onClick={() => ""}>????n h??ng c???a t??i</p>
              <p onClick={() => EditAccount()}>Th??ng b??o c???a t??i</p>
              <p onClick={() => ""}>T??ch ??i???m</p>
              <p onClick={() => EditPassword()}>????n y??u c???u c???a t??i</p>
              <p onClick={() => handleSignOut()}>
                <Link to={"/login"} >????ng xu???t</Link>

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



