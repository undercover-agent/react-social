import React from "react";
import * as serviceWorker from "./serviceWorker";

import store from "./redux/store";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

let rerenderEntireTree = () => {
  const app = (
    <BrowserRouter>
      <App appState={store.getState()} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  );
  ReactDOM.render(app, document.getElementById("root"));
};

//draw the main component
rerenderEntireTree();

//callback
store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
