import React, { PureComponent } from "react";
import { connect }from "react-redux";
import { actionCreators, selectors } from "./store";
import { } from "./style";

class Button extends PureComponent {
  render() {
    return <div>Button</div>;
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
)(Button);

