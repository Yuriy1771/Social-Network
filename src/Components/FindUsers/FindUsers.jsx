import React from "react";
import classes from './FindUsers.module.css';
import userPhoto from '../../assets/images/avatar-default.png';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let FindUsers = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let curP = props.currentPage;
    let curPF = ((curP - 10) < 0) ? 0 : curP - 5;
    let curPL = curP + 10;
    let slicedPages = pages.slice(curPF, curPL);


    return (
        <div>
            <div className={classes.containerSelects}>
                {slicedPages.map(p => {
                    return <div className={classes.containerSelect}>
                        <div className={props.currentPage === p && classes.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>
                            {" " + p}
                        </div>
                    </div>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>

                        <div className={classes.usersZone}>
                            <div className={classes.usersItem}>
                                <div className={classes.usersAvatar}>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                             className={classes.avatar}
                                             alt='avatar'/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ?
                                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                            props.unfollow(u.id);

                                        }} className={classes.follow}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                            props.follow(u.id);

                                        }} className={classes.unfollow}>Follow</button>}
                                </div>
                            </div>
                            <div className={classes.descriptionBlockOne}>
                                <div className={classes.fullName}>{u.name}</div>
                                <div className={classes.status}>{u.status}</div>
                            </div>
                            <div className={classes.descriptionBlockTwo}>
                                <div className={classes.country}>{'props.location.country'}</div>
                                <div className={classes.city}>{'props.location.city'}</div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default FindUsers;