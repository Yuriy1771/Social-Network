import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
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
          src="https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album"
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
