import React from 'react';
import s from './Footer.module.scss'
// import logoLinkedin from './../common/img/linkedin.png'

const Footer = () => {
    return (
        <div className={s.footerDiv}>
            <div className={s.socialNetworks}>

                <a href="">
                    <img className={s.linkedinLogo} src={''} alt="linkedin"/>
                </a>


            </div>
            <div>
                <p className={s.copyright}>© 2022 it-incubator.by All rights reserved.</p>
            </div>

        </div>
    );
};

export default Footer;