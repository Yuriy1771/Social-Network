import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    debugger
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
        <p className={classes.lastName}>Yuriy Dementev</p>
        <span className={classes.status}>Hi! I am a web programmer)</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
