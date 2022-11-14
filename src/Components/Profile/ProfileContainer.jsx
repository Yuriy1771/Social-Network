import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsersProfileAC} from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.params.userId;

        if (!userId) { userId = 26083; }


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(responce => {
                    this.props.setUsersProfile(responce.data)
                }
            )
    };


    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                />
            </div>
        );
    }
    ;
}

let
    mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
    })

let WithUrlDataContainerComponent = (props) => {
    return (<ProfileContainer {...props} params= {useParams()}/>
    )
}

export default connect(mapStateToProps, {
    setUsersProfile: setUsersProfileAC,
})(WithUrlDataContainerComponent);
