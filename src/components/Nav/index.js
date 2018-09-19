import React, { PureComponent } from "react";
import { connect }from "react-redux";
import { actionCreators, selectors } from "./store";
import { NavWrapper } from "./style";

class Nav extends PureComponent {
  render() {
    return <NavWrapper>Nav</NavWrapper>;
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
)(Nav);

