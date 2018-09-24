import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { HeaderRow, HeaderWelcome, HeaderBread, HeaderWrapper } from "./style";
import { Col } from "antd";
import moment from "moment";
import axios from 'axios'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sysTime: ""
    };
  }

  componentDidMount() {
    setInterval(() => {
      let sysTime = moment().format("YYYY-MM-DD HH:mm:ss");
      this.setState({sysTime});
    }, 1000);
  }


  render() {
    return (
      <HeaderWrapper>
        <HeaderWelcome>
          <Col span="24">
            <a className="right">Logout</a>
            <span className="right">Welcome, XXX</span>
          </Col>
        </HeaderWelcome>
        <HeaderBread>
          <Col span="4">
            <span className="title">Home</span>
          </Col>
          <Col span="20">
            <span className="right">Sunny</span>
            <span className="right">{this.state.sysTime}</span>
          </Col>
        </HeaderBread>
      </HeaderWrapper>
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
