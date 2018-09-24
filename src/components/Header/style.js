import styled from "styled-components";
import { Row } from "antd";

export const HeaderWrapper = styled.div`
  height: 12%;
  background-color: var(--bgc-white);
`;

export const HeaderRow = styled(Row)`
  padding: 0 20px;
  overflow: hidden;
  .right {
    float: right;
    margin: auto 10px;
  }
`;

export const HeaderWelcome = styled(HeaderRow)`
  border-bottom: 2px solid var(--line-color);
  line-height: 60px;
`;

export const HeaderBread = styled(HeaderRow)`
  line-height: 40px;
  .title {
    width: 100%;
    display: inline-block;
    text-align: center;
  }
`;
