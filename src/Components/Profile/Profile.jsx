import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/myPostContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfoContainer profile={props.profile}/>
      <MyPostsContainer
    // store={props.store}
      />
    </div>
  );
};

export default Profile;
