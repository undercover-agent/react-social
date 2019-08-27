import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Layout from "./hoc/Layout";
import Auth from "./containers/Auth/Auth";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route path="/" component={Profile} />
          <Route path="/auth" component={Auth} />
          <Route path="/settings" component={Settings} />
          <Route path="/news" component={News} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
