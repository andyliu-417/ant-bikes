import styled from "styled-components";
import { Row } from "antd";

export const HeaderRow = styled(Row)`
  padding: 0 20px;
  overflow: hidden;
  .right {
    float: right;
    margin: auto 10px;
  }
`;

export const HeaderWelcome = styled(HeaderRow)`
  height: 60px;
  line-height: 60px;
  background-color: var(--bkgc);
`;

export const HeaderBread = styled(HeaderRow)`
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #f9c700;
  .title {
      width:100%;
      display: inline-block;
      text-align: center;
  }
`;
