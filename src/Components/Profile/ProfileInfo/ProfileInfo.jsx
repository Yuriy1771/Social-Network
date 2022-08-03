import React from "react";
import classes from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt='picture'
        />
      </div>
      <div className={classes.discriptionBlock}>ava + discriptions</div>
    </div>
  );
};

export default ProfileInfo;