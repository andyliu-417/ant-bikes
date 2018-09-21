import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { LayoutWrapper, LayoutLeft, LayoutRight } from "./style";
import { Header, Footer, Nav } from "../";

class Layout extends PureComponent {
  render() {
    return (
      <LayoutWrapper>
        <LayoutLeft span={3}>
          <Nav />
        </LayoutLeft>
        <LayoutRight span={21}>
          <Header />
          <Footer />
        </LayoutRight>
      </LayoutWrapper>
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
)(Layout);
