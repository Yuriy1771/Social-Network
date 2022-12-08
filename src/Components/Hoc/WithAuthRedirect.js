import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

export function WithAuthRedirect(Component) {
    function RedirectComponent(props) {
        if (props.isAuth === false) return <Navigate to='/login'/>
        return (
            <Component {...props}/>
        )
    }

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
        }
    }

    let RedirectContainer = connect(mapStateToProps,{})(RedirectComponent)
    return RedirectContainer;
}
