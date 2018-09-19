import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./pages/Admin";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Admin} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
