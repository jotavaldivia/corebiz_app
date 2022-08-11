import React from 'react';
import style from './Footer.module.css';

//import svgs
import HeadPhones from '../../../assets/svgs/headphones.svg';
import Letter from '../../../assets/svgs/letter.svg';
import Logo from '../../../assets/svgs/logo-corebiz-global.svg';
import Vtex from '../../../assets/svgs/vtex.svg';

const Footer = () => {
    return (
        <>
            <div className={style.footer_container}>
                <div className={style.information}>
                    <h3 className={style.information_title}>Ubicación</h3>
                    <div className={style.divider}></div>
                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
                    <p>Alphavile SP</p>
                    <p>brasil@corebiz.ag</p>
                    <p>+55 11 3090 1039</p>
                </div>
                <div className={style.contact_container}>
                    <div className={style.contact}>
                        <img src={Letter} alt='' /> <p>CONTÁCTANOS</p>
                    </div>
                    <div className={style.consultor}>
                        <img src={HeadPhones} alt='' /> <p>HABLA CON UN CONSULTOR</p>
                    </div>
                </div>
                <div className={style.development_container}>
                    <div className={style.corebiz_container}>
                        <p>Desarrollado por</p>
                        <img src={Logo} alt='' />
                    </div>
                    <div>
                        <p>Powered by</p>
                        <div className={style.vtex_container}>
                            <img src={Vtex} alt='' />
                            <p>VTEX</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
