import React from "react";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/redux-store";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App
                    // state={state}
                    // dispatch={store.dispatch.bind(store)}
                    // store={store}
                />
            </Provider>
        </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});

reportWebVitals();
