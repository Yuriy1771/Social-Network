import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHook from "./ProfileStatusHook";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.content}>
            <div className={classes.descriptionBlock}>
                <div className={classes.avatar}>
                    <img
                        src={props.profile.photos.large}
                        alt="avatarProfile"
                    />
                </div>
                <div className={classes.description}>
                    <p className={classes.lastName}>{props.profile.fullName}</p>
                    <ProfileStatusHook  status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
