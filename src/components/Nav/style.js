import styled from "styled-components";

export const NavWrapper = styled.div`
  height: 100%;
  .nav-menu {
    min-height: 100%;
    .title {
      color: var(--text-color-grey);
    }

  }
`;

export const NavLogo = styled.div`
  width: 100%;
  padding: 3px 20%;
  background-color: #002140;
  .nav-logo {
    height: 50px;
    width: 56px;
    float: left;
  }
  .title {
    font-size: 32px;
    color: var(--text-color-grey);
    float: right;
  }
`;
