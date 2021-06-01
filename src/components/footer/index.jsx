import React from 'react';
import '../../scss/footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__title">Công ty cổ phần chữ ký số NewCA</div>
          <div className="footer__content">Địa chỉ: Tầng 4B, Tòa nhà T6-08, đường Tôn Quang Phiệt, Q.Bắc Từ Liêm, Hà Nội</div>
          <div className="footer__content"><span>Tổng đài hỗ trợ:</span> 1900.2066</div>
          <div className="footer__content"><span>Hotline:</span> 0936.208.068</div>
        </div>
        <div className="footer__social">
          <div className="footer__social__fb">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div className="footer__social__gg">
            <i class="fab fa-google"></i>
          </div>
          <div className="footer__social__ytb">
            <i class="fab fa-youtube"></i>
          </div>
        </div>
        <div className="footer__copyright">
        Copyright © NewCA. All rights reserved.
        </div>
      </div>
    </>
  )
}

export default Footer;
