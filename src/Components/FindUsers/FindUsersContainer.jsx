import React from "react";
import FindUsers from "./FindUsers";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/findUsers-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow1: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FindUsers);