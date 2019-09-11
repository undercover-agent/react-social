import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let state = {
  dialogsData: [
    { id: "1", name: "Name 1", message: "hello kitty" },
    { id: "2", name: "Name 2", message: "hello man" },
    { id: "3", name: "Name 3", message: "hello world" }
  ],
  postData: [
    { message: "lorem ipsum", likesCount: 2 },
    { message: "lorem ipsum, ipsum lorem", likesCount: 12 }
  ]
};

const app = (
  <BrowserRouter>
    <App dialogsData={state.dialogsData} postData={state.postData} />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
