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
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile state={props.state.profilePage} addPost={props.addPost} />
              }
            />
            ;
            <Route
              path="/dialogs/*"
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            ;
            <Route
              path="/news"
              element={<News state={props.state.newsPage} />}
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
    </BrowserRouter>
  );
};

export default App;
