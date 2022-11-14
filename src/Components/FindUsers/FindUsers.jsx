import React from "react";
import classes from './FindUsers.module.css';
import userPhoto from '../../assets/images/avatar-default.png';
import {NavLink} from "react-router-dom";

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
            <div>
                {slicedPages.map(p => {
                    return <span className={props.currentPage === p && classes.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>
                        {" " + p}</span>
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
                                    {u.followed ?
                                        <button onClick={() => {
                                            props.follow(u.id)
                                        }} className={classes.unfollow}>Follow</button> :
                                        <button onClick={() => {
                                            props.unfollow(u.id)
                                        }} className={classes.follow}>Unfollow</button>}
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


// let onBtnFollow = (props) => {
//     props.follow1(props.id)
// }
//
// let onBtnUnfollow = (props) => {
//     props.unfollow(props.id)
//
// }
//
//
// const FindUsers = (props) => {
//     return (
//         <div className={classes.usersZone}>
//             <div className={classes.usersItem}>
//                 <div className={classes.usersAvatar}>
//                     <img src={props.photos.small != null ? props.photos.small : userPhoto} className={classes.avatar} alt='avatar'/>
//                 </div>
//                 <div>
//                     {props.followed ? <button onClick={onBtnUnfollow} className={classes.unfollow}>Unfollow</button> :
//                         <button onClick={onBtnFollow} className={classes.follow}>Follow</button>}
//                     {/*    тут баг*/}
//                 </div>
//             </div>
//             <div className={classes.descriptionBlockOne}>
//                 <div className={classes.fullName}>{props.fullName}</div>
//                 <div className={classes.status}>{props.status}</div>
//             </div>
//             <div className={classes.descriptionBlockTwo}>
//                 <div className={classes.country}>{'props.location.country'}</div>
//                 <div className={classes.city}>{'props.location.city'}</div>
//             </div>
//         </div>
//     )
//
// }

export default FindUsers;