const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {
            id: 2,
            post: "Hi, how are you?",
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
    newPostText: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 1,
                post: state.newPostText,
                likesCount: 0,
                avatar:
                    "https://sun9-22.userapi.com/impg/wC75CeN7D_79iEeBUjFSsDsjJs02M5e6cqrbbA/p7IihIhOYlw.jpg?size=2560x1707&quality=96&sign=be071c82cadba6f14194bf91afcfd4e9&type=album",
            };
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
};

export default profileReducer;
