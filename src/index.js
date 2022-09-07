import React from "react";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/state";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { subscribe } from "./Redux/state";
// import {
//   addPost,
//   addNews,
//   updateNewPostText,
//   updateNewsPostText,
//   addMessage,
//   updateNewMessageText,
// } from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
        // addPost={store.addPost.bind(store)}
        // updateNewPostText={store.updateNewPostText.bind(store)}
        // addNews={store.addNews.bind(store)}
        // updateNewsPostText={store.updateNewsPostText.bind(store)}
        // addMessage={store.addMessage.bind(store)}
        // updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
