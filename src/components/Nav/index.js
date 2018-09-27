import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators, selectors } from "./store";
import { NavWrapper, NavLogo } from "./style";
import { menuConfig } from "../../config";
import { Menu, Icon, Button } from "antd";
import { NavLink } from "react-router-dom";

const SubMenu = Menu.SubMenu;

class Nav extends PureComponent {
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            title={
              <span>
                <Icon type={item.icon} className="title" />
                <span className="title">{item.title}</span>
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
            <NavLink to={item.key}>
              {item.icon ? <Icon type={item.icon} className="title" /> : null}
              <span className="title">{item.title}</span>
            </NavLink>
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
          defaultSelectedKeys={["admin/home"]}
          defaultOpenKeys={["admin/ui"]}
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
