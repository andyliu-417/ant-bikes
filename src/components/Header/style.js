import styled from "styled-components";
import { Row } from "antd";

export const HeaderWrapper = styled.div`
  height: 15%;
  // border: 1px blue solid;
  background-color: white;
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
  line-height: 60px;
`;

export const HeaderBread = styled(HeaderRow)`
  line-height: 40px;
  // border-top: 1px solid #f9c700;
  .title {
    width: 100%;
    display: inline-block;
    text-align: center;
  }
`;
