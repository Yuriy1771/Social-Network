import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../Redux/findUsers-reducer";
import * as axios from "axios";
import FindUsers from "./FindUsers";
import Preloader from "../common/Preloader/Preloader";

class FindUsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true}
            )
            .then(responce => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(responce.data.items)
                    this.props.setTotalUsersCount(responce.data.totalCount)
                }
            )
    }

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(responce => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(responce.data.items)
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

    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,

})(FindUsersContainer);