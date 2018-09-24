import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { LayoutLeft, LayoutRight, LayoutWrapper, LayoutContent } from "./style";
import { Header, Footer, Nav } from "../";
import Home from "../../pages/Home";
class Layout extends PureComponent {
  render() {
    return (
      <LayoutWrapper>
        <LayoutLeft span={3}>
          <Nav />
        </LayoutLeft>
        <LayoutRight span={21}>
          <Header />
          <LayoutContent>
            <Home />
          </LayoutContent>
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
