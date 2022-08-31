import React from 'react';
import classes from './Header.module.css';
import logo from './imgProject/LogoSocialNetwork.png';

const Header = () => {
    return (
        <header className={classes.header}>
        <img src={logo} alt="picture" />
      </header>
    )
}


export default Header;

// https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png