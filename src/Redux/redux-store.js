import {combineReducers, legacy_createStore as createStore} from 'redux';
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import musicReducer from "./music-reducer";
import findUsersReducer from "./findUsers-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    newsPage : newsReducer,
    sidebarFriends: sidebarReducer,
    musicPage: musicReducer,
    findUsersPage: findUsersReducer,

});

let store = createStore(reducers);

window.store = store;

export default store;