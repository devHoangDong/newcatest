import { format } from 'date-fns'
import '../../../scss/topnav.scss'
import {
    BrowserRouter as Router, Link, Route, Switch, useRouteMatch
  } from 'react-router-dom';
  import * as React from 'react'
  import { useCallback } from 'react'
  import { useKeycloak } from '@react-keycloak/web'
  import { useAxios } from '../../../utils/hooks'
  
const d = format(new Date(), 'do MMMM yyyy')
export default function TopNav() {
  const { keycloak } = useKeycloak()
  const axiosInstance = useAxios('http://localhost:5000') // see https://github.com/panz3r/jwt-checker-server for a quick implementation
  const callApi = useCallback(() => {
    !!axiosInstance.current && axiosInstance.current.get('/jwt/decode')
  }, [axiosInstance])

    return (
        <div className="topNav">
            <div className="topNav__left">
                <p className="topNav__left__title">Dashboard Overview</p>
                <p>Today, {d}</p>
            </div>
            <div className="topNav__right">
              <div className="topNav__right__avatar">
                <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="logo-mini"></img>
                <div className="topNav__right__userName">
                  <div className="userName__thumb">Hoàng Đông&nbsp;<i class="far fa-angle-down"></i></div>
                  <div className="thumb__editAccount">
                      <p>Sửa thông tin</p>
                      <p>Đổi mật khẩu</p>
                      {!!keycloak?.authenticated && (<p onClick={() => keycloak.logout()}>
                        Đăng xuất
                      </p>)}
                  </div>
                </div>
              </div>
        </div>
        </div>
    )
}



