import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import {} from "./style";
import Layout from "../../components/Layout";
import { Divider } from "antd";

class Admin extends PureComponent {
  render() {
    return <div>asdfsadf</div>;
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
)(Admin);
