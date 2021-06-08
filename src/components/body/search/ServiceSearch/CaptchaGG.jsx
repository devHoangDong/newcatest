import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";


const CaptchaGG = ({ onChange }) => {

    return (
        <div>
            <ReCAPTCHA
                sitekey="6LdVQB4bAAAAAALFZT1WkU9IgcgO0yNb1btSo2uA"
                onChange={onChange}
                verifyCallback={onChange}
            />
        </div>
    );
};

export default CaptchaGG;
