import React from "react";
import classes from './FindUsers.module.css';


let onBtnFollow = (props) => {
    props.follow1(props.id)
}

let onBtnUnfollow = (props) => {
    props.unfollow(props.id)

}


const FindUsersElement = (props) => {
    return (
        <div className={classes.usersZone}>
            <div className={classes.usersItem}>
                <div className={classes.usersAvatar}>
                    <img src={props.avatar} className={classes.avatar} alt='avatar'/>
                </div>
                <div>
                    {props.followed ? <button onClick={onBtnUnfollow} className={classes.unfollow}>Unfollow</button> :
                        <button onClick={onBtnFollow} className={classes.follow}>Follow</button>}
                    {/*    тут баг*/}
                </div>
            </div>
            <div className={classes.descriptionBlockOne}>
                <div className={classes.fullName}>{props.fullName}</div>
                <div className={classes.status}>{props.status}</div>
            </div>
            <div className={classes.descriptionBlockTwo}>
                <div className={classes.country}>{props.location.country}</div>
                <div className={classes.city}>{props.location.city}</div>
            </div>
        </div>
    )

}

export default FindUsersElement;