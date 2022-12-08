import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import {WithAuthRedirect} from "../Hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (message) => {
            dispatch(updateNewMessageTextActionCreator(message))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs);