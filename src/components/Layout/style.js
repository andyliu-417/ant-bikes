import styled from "styled-components";
import { Row, Col } from "antd";

export const LayoutLeft = styled(Col)`
  //   background-color: red;
  height: calc(100vh);
`;

export const LayoutRight = styled(Col)`
  background-color: var(--bkgc);
  height: calc(100vh);
`;

export const LayoutWrapper = styled(Row)`
  // border: 1px solid #222;
`;

export const LayoutContent = styled.div`
  // border: 1px solid red;
  height: 70%;
  margin: 5% calc(5vh);
  background-color: white;
`;
