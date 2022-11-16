import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../Redux/findUsers-reducer";
import FindUsers from "./FindUsers";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class FindUsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.setCurrentPage, this.props.setTotalUsersCount).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            }
        )
    }

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.setTotalUsersCount).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            }
        )
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
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress = {this.props.followingInProgress}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
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
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,

})(FindUsersContainer);