import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {updateTextStatusAC} from "../../../Redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        newTextStatus: state.profilePage.newTextStatus,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateStatus: (text) => {dispatch(updateTextStatusAC(text))},
    }
}

let ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;