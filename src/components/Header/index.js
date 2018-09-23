import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { HeaderWelcome, HeaderBread, HeaderRow } from "./style";
import { Col } from "antd";

class Header extends PureComponent {
  render() {
    return (
      <Fragment>
        <HeaderWelcome>
          <Col span="24">
            <a className="right">Logout</a>
            <span className="right">Welcome, XXX</span>
          </Col>
        </HeaderWelcome>
        <HeaderBread>
          <Col span="4">
            <span className='title'>Home</span>
          </Col>
          <Col span="20">
            <span className="right">Sunny</span>
            <span className="right">2018-09-22</span>
          </Col>
        </HeaderBread>
      </Fragment>
    );
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
)(Header);
