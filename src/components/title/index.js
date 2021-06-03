import React from 'react';
import '../../scss/title.scss';
import { Row, Col } from 'antd';


const Title = () => {
  return (
    <div className="title">
      <div className="title__content">
        <Row>
          <Col span={6} className="title__content__left">
            <ul>
              <li>
                <span>Gọi ngay</span>
                <a href="#"><i className="fas fa-phone-alt"/> 1900 2066</a>
              </li>
              <li>
                <a href="#"><i className="fas fa-envelope"></i> support@newca.vn</a>
              </li>
            </ul>
          </Col>
          <Col span={6}></Col>
          <Col span={6} className="title__content__right"></Col>
        </Row>
      </div>
    </div>
  )
}

export default Title;
