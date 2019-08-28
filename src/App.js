import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout";
import Auth from "./containers/Auth/Auth";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Content from "./components/Content/Content";
import Messages from "./components/Messages/Messages";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route path="/profile" component={Content} />
          <Route path="/settings" component={Settings} />
          <Route path="/messages" component={Messages} />
          <Route path="/news" component={News} />
          <Route path="/" component={Auth} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
