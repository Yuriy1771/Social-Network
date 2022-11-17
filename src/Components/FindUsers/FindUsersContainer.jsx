import React from "react";
import {connect} from "react-redux";
import {
    followSuccess,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowSuccess,
    follow,
    unfollow,
} from "../../Redux/findUsers-reducer";
import FindUsers from "./FindUsers";
import Preloader from "../common/Preloader/Preloader";

class FindUsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <FindUsers
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    acceptFollow={this.props.acceptFollow}
                    acceptUnfollow={this.props.acceptUnfollow}
                    followingInProgress = {this.props.followingInProgress}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                />
            </>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        currentPage: state.findUsersPage.currentPage,
        isFetching: state.findUsersPage.isFetching,
        followingInProgress: state.findUsersPage.followingInProgress,
    }
}


export default connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    unfollow,
    follow,

})(FindUsersContainer);