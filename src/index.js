import React from "react";
import { render } from "react-dom";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

import App from "./container/App";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
