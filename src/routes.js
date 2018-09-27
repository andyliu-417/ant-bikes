import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nomatch from "./pages/Nomatch";
import Login from "./pages/Login";
import { Layout } from "./components";
import App from "./App";
import { menuConfig } from "./config";

class Routes extends React.Component {
  renderAdminRoutes = menus => {
    return menus.map(item => {
      if (item.children) {
        return item.children.map(child => {
          return <Route key={child.key} path={child.key} component={child.component} />;
        });
      } else {
        return <Route exact key={item.key} path={item.key} component={item.component} />;
      }
    });
  };

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
                  <Switch>{this.renderAdminRoutes(menuConfig)}</Switch>
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
