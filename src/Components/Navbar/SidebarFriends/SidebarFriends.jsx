import React from "react";
import classes from "./../SidebarFriends/SidebarFriends.module.css";

const SidebarFriends = (props) => {

    return (
        <div className={classes.sidebarFriendsContainer}>
                <div className={classes.sidebarBlockLeft}>
                    <img className={classes.sidebarAvatar} src="https://the-challenger.ru/wp-content/uploads/2015/08/shutterstock_92854117-600x600.jpg" alt=""/>
                    <span className={classes.sidebarName}><p>Petr</p></span>
                </div>
                <div className={classes.sidebarBlockCenter}>
                    <img className={classes.sidebarAvatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRA3PuNUIJHAviGQ0BQ5Q2xNscd-EjRC8IPQ&usqp=CAU" alt=""/>
                    <span className={classes.sidebarName}><p>Liza</p></span>
                </div>
                <div className={classes.sidebarBlockRight}>
                    <img className={classes.sidebarAvatar} src="https://the-challenger.ru/wp-content/uploads/2020/06/shutterstock_1749605879-600x600.jpg" alt=""/>
                    <span className={classes.sidebarName}><p>Nika</p></span>
                </div>
        </div>
    );
};

export default SidebarFriends;
