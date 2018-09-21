import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { NavWrapper, NavLogo } from "./style";
import { menuConfig } from "../../config";
import { Menu, Icon, Button } from "antd";

const SubMenu = Menu.SubMenu;
class Nav extends PureComponent {
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
            key={item.key}
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.key}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </Menu.Item>
        );
      }
    });
  };

  render() {
    return (
      <NavWrapper>
        <NavLogo>
          <img src="/assets/logo.svg" alt="home" className="nav-logo" />
          <span className="title">BIKE</span>
        </NavLogo>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={false}
          className="nav-menu"
        >
          {this.renderMenu(menuConfig)}
        </Menu>
      </NavWrapper>
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
)(Nav);
