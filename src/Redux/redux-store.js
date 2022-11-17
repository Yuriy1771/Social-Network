import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import musicReducer from "./music-reducer";
import findUsersReducer from "./findUsers-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    newsPage : newsReducer,
    sidebarFriends: sidebarReducer,
    musicPage: musicReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;