import React from "react";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

import state, { subscribe } from "./redux/state";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";

let rerenderEntireTree = () => {
  const app = (
    <BrowserRouter>
      <App
        appState={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>
  );
  ReactDOM.render(app, document.getElementById("root"));
};

//draw the main component
rerenderEntireTree();

//callback
subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
