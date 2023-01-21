import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {
            id: 2,
            post: "Hi, how are you? ",
            likesCount: 4,
            avatar:
                "https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album",
        },
        {
            id: 3,
            post: "It's my first post",
            likesCount: 54,
            avatar:
                "https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album",
        },
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                post: action.post,
                likesCount: 0,
                avatar:
                    "https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album",
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
};

//actions
export const addPostAC = (post) => ({type: ADD_POST, post});
export const setUsersProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

//thunks
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(data => {
            dispatch(setUsersProfileAC(data))
        }
    )
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        }
    )
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        }
    )
}

export default profileReducer;
