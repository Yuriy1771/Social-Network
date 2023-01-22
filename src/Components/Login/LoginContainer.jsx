import {connect} from "react-redux";
import Login from "./Login";
import {loginThunk} from "../../Redux/auth-reducer";

let mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        loginThunk: (email,password,rememberMe) => {dispatch(loginThunk(email,password,rememberMe))}
    }
}
let LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;