import React from 'react';
//inport components
import Search from '../../../components/Search/Search';
//import styles
import style from './Header.module.css';
//import images
import Logo from '../../../assets/images/logo.jpg';
import Menu from '../../../assets/images/menu.png';
import Cart from '../../../assets/images/cart.jpg';
import User from '../../../assets/images/user.jpg';

const Header = ({ countCart }) => {
    return (
        <>
            <div className={style.container_header}>
                <img className={style.menu} src={Menu} alt='' />
                <img className={style.logo} src={Logo} alt='Logo corebiz' />
                <div className={style.search}>
                    <Search />
                </div>
                <div className={style.container_menu}>
                    <img src={User} alt='' />
                    <p className={style.menu_text}>Mi Cuenta</p>
                </div>
                <div className={style.container_cart}>
                    <img className={style.cart} src={Cart} alt='' />
                    {/* <p className={style.count}>{countCart.length}</p> */}
                    <p className={style.count}>{countCart.length - 1}</p>
                </div>
            </div>
        </>
    );
};

export default Header;
