import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsersProfileAC} from "../../Redux/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(responce => {
                    this.props.setUsersProfile(responce.data)
                }
            )
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                />
            </div>
        );
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {
    setUsersProfile: setUsersProfileAC,
})(ProfileContainer);
