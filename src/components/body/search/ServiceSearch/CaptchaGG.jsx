import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";


const CaptchaGG = ({ onChange }) => {

    return (
        <div>
            <ReCAPTCHA
                sitekey="6LeXNB4bAAAAADrh1n9rpYnzs2Gkbp2AweLSVCZj"
                onloadCallback={onChange}
                verifyCallback={onChange}
            />
        </div>
    );
};

export default CaptchaGG;
