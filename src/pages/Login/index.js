import React, { PureComponent } from "react";
import { connect }from "react-redux";
import { actionCreators, selectors } from "./store";
import { } from "./style";

class Login extends PureComponent {
  render() {
    return <div>Login</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

