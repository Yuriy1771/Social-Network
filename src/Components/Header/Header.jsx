import React from 'react';
import classes from './Header.module.css';
import logo from './imgProject/LogoSocialNetwork.png';
import {Navigate, NavLink} from "react-router-dom";

const Header = (props) => {

    function logout() {
        props.logoutThunk();
    }

    return (
        <header className={classes.header}>
        <img src={logo} alt="picture" className={classes.logo} />
            {/*<span className={classes.logout} onClick={logout}><p>Logout</p></span>*/}
            <div className={classes.loginBlock}>
                {props.isAuth ?  <NavLink to={'/login'} className={classes.logDeor} onClick={logout}>Log out</NavLink>: <NavLink to={'/login'} className={classes.logDeor}>Login</NavLink>}
            </div>
      </header>
    )
}


export default Header;

// https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png