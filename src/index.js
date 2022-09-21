import React from "react";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/redux-store";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App
                    // state={state}
                    // dispatch={store.dispatch.bind(store)}
                    store={store}
                />
            </StoreContext.Provider>
        </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});

reportWebVitals();
