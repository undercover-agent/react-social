import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";

export let rerenderEntireTree = state => {
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
