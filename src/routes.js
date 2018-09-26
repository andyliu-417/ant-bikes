import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { Layout } from "./components";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Routes;
