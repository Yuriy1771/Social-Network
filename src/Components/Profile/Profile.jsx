import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/myPostContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
    // store={props.store}
      />
    </div>
  );
};

export default Profile;
