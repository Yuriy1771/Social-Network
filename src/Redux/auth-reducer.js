import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

function authReducer( state = initialState, action) {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        default: return state;
    }
}

//actions
export const setAuthUserData = (userId,email,login, isAuth) => ({type: SET_USER_DATA, payload: {userId,email,login,isAuth}})

//thunks
export const getAuthUserData = () => (dispatch) => {
    authAPI.getAuthMe()
        .then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login,true));
        }
    })
}

export const loginThunk = (email,password,rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}

export const logoutThunk = () => (dispatch) => {
    authAPI.logout().then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export default authReducer;