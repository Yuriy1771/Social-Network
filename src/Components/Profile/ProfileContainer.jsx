import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile,} from "../../Redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {WithAuthRedirect} from "../Hoc/WithAuthRedirect";
import {compose} from "redux";
import {withRouter} from "../Hoc/ withRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;

        if (!userId) {
            userId = 26083;
        }

        this.props.getUserProfile(userId)
    };

    render() {
        return (
            <div>
                <Profile
                    {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
    ;
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer);
