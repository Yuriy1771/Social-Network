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
                ...action.data,
                isAuth: true,
            }
        default: return state;
    }
}

//actions
export const setAuthUserData = (userId,email,login) => ({type: SET_USER_DATA, data: {userId,email, login}})

//thunks
export const getAuthUserData = () => (dispatch) => {
    authAPI.getAuthMe()
        .then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    })
}

export default authReducer;