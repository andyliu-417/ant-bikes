import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Layout} from './components'
import Home from "./pages/Home";
import Admin from "./pages/Admin";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
        {/* <Switch>
          <Route path="/" exact component={Admin} />
        </Switch> */}
      </BrowserRouter>
    );
  }
}

export default Routes;
