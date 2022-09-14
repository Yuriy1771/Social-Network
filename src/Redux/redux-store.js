import {combineReducers, legacy_createStore as createStore} from 'redux';
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    newsPage : newsReducer,
    sidebarFriends: sidebarReducer,

});

let store = createStore(reducers);

export default store;