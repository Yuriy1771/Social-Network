import React from 'react';
import classes from './Header.module.css';
import logo from './imgProject/LogoSocialNetwork.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
        <img src={logo} alt="picture" />
            <div className={classes.loginBlock}>
                <img src="https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album" alt=""/>
                {props.isAuth ? <div className={classes.login}><p>{props.login}</p></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
      </header>
    )
}


export default Header;

// https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png