import {connect} from "react-redux";
import Login from "./Login";
import {loginThunk} from "../../Redux/auth-reducer";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        loginThunk: (email,password,rememberMe,setError) => {dispatch(loginThunk(email,password,rememberMe,setError))}
    }
}
let LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;