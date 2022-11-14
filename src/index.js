import React from "react";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/redux-store";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
        <Provider store={store}>
            <App
                store={store}
            />
        </Provider>
);


reportWebVitals();
