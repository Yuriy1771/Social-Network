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
        <span>
            <div className={classes.usersBlock}>
                <img src={props.avatar} className={classes.avatar} alt='avatar'/>
            </div>
            <div>
                {props.followed ? <button onClick={onBtnFollow}>Follow</button> :
                    <button onClick={onBtnUnfollow}>Unfollow</button>}
            {/*    тут баг*/}
            </div>
        </span>
            <span>
            <span>
                <div>{props.fullName}</div>
                <div>{props.status}</div>
            </span>
            <span>
                <div>{props.location.country}</div>
                <div>{props.location.city}</div>
            </span>
        </span>
        </div>
    )

}

export default FindUsersElement;