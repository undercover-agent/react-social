import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Layout from "./hoc/Layout";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route path="/profile" component={Profile} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
