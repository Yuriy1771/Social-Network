import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import SidebarFriends from "./Components/Navbar/SidebarFriends/SidebarFriends";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NewsContainer from "./Components/News/NewsContainer";
import store from "./Redux/redux-store";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div className="container-app-wrapper-content">
                        <div className="app-wrapper-content">
                            <Routes>
                                <Route
                                    path="/profile"
                                    element={
                                        <Profile
                                            // store={props.store}

                                        />
                                    }
                                />
                                ;
                                <Route
                                    path="/dialogs/*"
                                    element={
                                        <DialogsContainer
                                            // store={props.store}
                                        />
                                    }
                                />
                                ;
                                <Route
                                    path="/news"
                                    element={
                                        <NewsContainer
                                            // store={props.store}
                                        />
                                    }
                                />
                                ;
                                <Route
                                    path="/music"
                                    element={
                                        <Music
                                            store={props.store}
                                        />
                                    }
                                />
                                ;
                                <Route path="/settings" element={<Settings/>}/>;
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
