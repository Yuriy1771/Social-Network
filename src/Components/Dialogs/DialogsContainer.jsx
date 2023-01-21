import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageAC} from "../../Redux/dialogs-reducer";
import {WithAuthRedirect} from "../Hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {dispatch(addMessageAC(message))}
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs);