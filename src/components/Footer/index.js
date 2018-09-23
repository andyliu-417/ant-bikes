import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { FooterWrapper } from "./style";

class Footer extends PureComponent {
  render() {
    return (
      <FooterWrapper>
        版权所有：慕课网&河畔一角（推荐使用谷歌浏览器，可以获得更佳操作页面体验）
        技术支持：河畔一角
      </FooterWrapper>
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
)(Footer);
