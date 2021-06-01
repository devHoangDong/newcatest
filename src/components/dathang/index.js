import React, { useState } from 'react';
import '../../scss/Header.scss';
import '../../scss/cart.scss';
import { Affix } from 'antd';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const { SubMenu } = Menu;
const index = () => {

  return (
    <div className="orderContainer">
        <div className="order">
            <div className="orderTitle">
                <h2>Thông Tin Mua Hàng</h2>
            </div>
            <br></br>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Họ và tên</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Trường này không được để trống</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Số điện thoại</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Địa chỉ</label>
                    <input type="email" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/cart" className="quaylai">Quay lại</Link>
            </form>
        </div>
    </div>
  );
}

export default index
