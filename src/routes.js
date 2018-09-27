import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nomatch from "./pages/Nomatch";
import Button from "./pages/Button";
import Login from "./pages/Login";
import { Layout } from "./components";
import App from "./App";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/admin"
              render={() => (
                <Layout>
                  <Switch>
                    <Route path="/admin/buttons" component={Button} />
                  </Switch>
                </Layout>
              )}
            />
            <Route component={Nomatch} />
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

export default Routes;
