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
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="container-app-wrapper-content">
            <div className="app-wrapper-content">
              <Routes>
                <Route
                  path="/profile"
                  element={
                    <Profile
                      profilePage={props.state.profilePage}
                      dispatch={props.dispatch}
                    />
                  }
                />
                ;
                <Route
                  path="/dialogs/*"
                  element={
                    <Dialogs
                      state={props.state.dialogsPage}
                      dispatch={props.dispatch}
                    />
                  }
                />
                ;
                <Route
                  path="/news"
                  element={
                    <News
                      newsPage={props.state.newsPage}
                      // addNews={props.addNews}
                      // updateNewsPostText={props.updateNewsPostText}
                      // newPostText={props.state.newsPage.newPostText}
                      dispatch={props.dispatch}
                    />
                  }
                />
                ;
                <Route
                  path="/music"
                  element={<Music state={props.state.musicPage} />}
                />
                ;
                <Route path="/settings" element={<Settings />} />;
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
