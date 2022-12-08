import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, } from "../../Redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;

        if (!userId) {
            userId = 26083;
        }

      this.props.getUserProfile(userId)
    };

    render() {
        if(this.props.isAuth === false) return <Navigate to='/login'/>
        return (
            <div>
                <Profile
                    {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
    ;
}

let
    mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    })

let WithUrlDataContainerComponent = (props) => {
    return (<ProfileContainer {...props} params={useParams()}/>
    )
}

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
