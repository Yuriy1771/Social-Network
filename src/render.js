import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  addPost,
  addNews,
  updateNewPostText,
  updateNewsPostText,
  addMessage,
  updateNewMessageText,
} from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        addNews={addNews}
        updateNewPostText={updateNewPostText}
        updateNewsPostText={updateNewsPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>
  );
};
