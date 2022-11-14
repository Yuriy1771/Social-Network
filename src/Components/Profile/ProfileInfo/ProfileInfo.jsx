import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    // let userPhoto = props.profile.photos.large;
    //
    // if (!userPhoto) {
    //     return <div className={classes.avatar}>
    //         <img
    //             src='https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album'
    //             alt="avatarProfile"
    //         />
    //     </div>
    //
    // }

    return (
    <div className={classes.content}>
      <div className={classes.logo}>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="picture"
        />
      </div>
      <div className={classes.descriptionBlock}>
        <div className={classes.avatar}>
        <img
          src={props.profile.photos.large}
          alt="avatarProfile"
       />
        </div>
        <div className={classes.description}>
        <p className={classes.lastName}>{props.profile.fullName}</p>
        <span className={classes.status}>{props.profile.aboutMe}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
