// import {connect} from "react-redux";
// import ProfileInfo from "./ProfileInfo";
// import {getStatus, setStatusAC, updateStatus} from "../../../Redux/profile-reducer";
//
// let mapStateToProps = (state) => {
//     return {
//         profile: state.profilePage.profile,
//         status: state.profilePage.status,
//     }
// }
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         setStatus: (status) => {dispatch(setStatusAC(status))},
//         updateStatus: (status) => {dispatch(updateStatus(status))},
//         getStatus: (userId) => {dispatch(getStatus(userId))},
//     }
// }
//
// let ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
//
// export default ProfileInfoContainer;