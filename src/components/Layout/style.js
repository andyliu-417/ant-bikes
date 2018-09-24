import styled from "styled-components";
import { Row, Col } from "antd";

export const LayoutLeft = styled(Col)`
  height: calc(100vh);
`;

export const LayoutRight = styled(Col)`
  background-color: var(--bgc-grey);
  height: calc(100vh);
`;

export const LayoutWrapper = styled(Row)`
  overflow: hidden;
`;

export const LayoutContent = styled.div`
  height: 70%;
  margin: 4% calc(5vh);
  background-color: white;
`;
