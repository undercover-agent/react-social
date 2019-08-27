import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/profile" component={Profile} />
      </Switch>
      {/* <Header />
      <Navbar />
      <Content />
      <Footer /> */}
    </div>
  );
};

export default App;
