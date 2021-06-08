import React, { useState } from 'react';
import '../../scss/Header.scss';
import { Affix } from 'antd';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { history } from 'react-router-dom';

const { SubMenu } = Menu;
const Header = () => {
  const [current, setCurrent] = useState('home');
  const listCart = useSelector(store => store.Cart)
  const handleClick = e => {
    setCurrent(e.key);
  };
  return (
    <div className="header">
      <div className="header__logo">
        {/* <div className="logo"></div> */}
        <p>NewCa </p><i class="far fa-bars fa-lg"></i>
        {/* <p>Phiên bản 29.04.2021</p> */}
      </div>
      <div className="header__nav"><Link to='/'><i class="fal fa-home"></i>&nbsp;Dashboard</Link></div>
      <div className="header__nav"><Link to='/search'><i class="far fa-search"></i>&nbsp;Tra cứu dịch vụ</Link></div>
      <div className="header__nav"><Link to='/search'><i class="fas fa-shopping-bag"></i>&nbsp;Sản phẩm</Link></div>
      <div className="header__nav"><Link to='/request'><i class="fal fa-handshake"></i>&nbsp;Yêu cầu dịch vụ</Link></div>
      {/* <div className="header__nav"><Link to='/account'><i class="fal fa-user-circle"></i>&nbsp;Account</Link></div> */}
      {/* <div className="header__nav">
        <Link to='/cart'><i class="far fa-shopping-cart"></i>&nbsp;Giỏ hàng&nbsp;
                <span className="icon-cart bg-color white total_items">{listCart ? listCart.length : '0'}</span>
        </Link>
      </div> */}
      <div className="header__nav">
        <Link to='/help'>
          <i className="fas fa-question-circle"></i>&nbsp;Hỗ trợ&nbsp;
        </Link>
      </div>
      {/* <div className="header__nav">
        <Link to='/loyalty'>
          <i className="fas fa-wallet"></i>&nbsp;Tích điểm&nbsp;
        </Link>
      </div> */}
      {/* <div className="header__nav">
        <Link to='/loyalty'>
          <i className="fas fa-arrows-alt">&nbsp;Gia hạn dịch vụ&nbsp;</i>
        </Link>
      </div> */}
      {/* <div className="header__nav">
        <Link to='/loyalty'>
          <i className="fab fa-amazon-pay">&nbsp;Thanh toán trực tuyến&nbsp;</i>
        </Link>
      </div> */}
      {/* <div className="header__nav">
        <Link to='/loyalty'>
          <i className="fab fa-android">&nbsp;Tiện ích&nbsp;</i>
        </Link>
      </div> */}
    </div>
  );
}

export default Header
