import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout";
import Auth from "./containers/Auth/Auth";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Content from "./components/Content/Content";
import Messages from "./components/Messages/Messages";

const App = props => {
    return (
        <div className="app">
            <Layout>
                <Switch>
                    <Route
                        path="/profile"
                        render={() => (
                            <Content
                                store={props.store}
                                profilePage={props.appState.profilePage}
                                dispatch={props.dispatch}
                            />
                        )}
                    />
                    <Route path="/settings" render={() => <Settings />} />
                    <Route
                        path="/messages"
                        render={() => (
                            <Messages
                                state={props.appState.dialogPage}
                                dispatch={props.dispatch}
                            />
                        )}
                    />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/" component={Auth} />
                </Switch>
            </Layout>
        </div>
    );
};

export default App;
