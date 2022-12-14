import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reducer";
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

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    };

    render() {
        return (
            <div>
                <Profile
                    {...this.props} profile={this.props.profile}
                    status={this.props.status} updateStatus={this.props.updateStatus}
                    />
            </div>
        );
    }
    ;
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
    }),
    withRouter,
    // WithAuthRedirect,
)(ProfileContainer);
