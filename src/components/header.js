import React from "react";
import styled from "styled-components";

import BgShape from "../images/Bg Shape.svg";

const HeaderComponent = styled.div`
  /* min-height: 24rem; */
  min-height: 27rem;
  width: 100%;
  background: url('${BgShape}') no-repeat center;
  background-position: bottom right;
  background-size: cover;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bg};
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    height: 33rem;
  }
`;

const HeaderBox = styled.div`
  max-width: 992px;
  color: white;
  padding: 0 2rem;

  font-weight: bold;
`;

const RectBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 60%;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  z-index: -1;
`;

const Header = ({ children }) => {
  return (
    <HeaderComponent>
      <HeaderBox>
        <RectBox />
        {children}
      </HeaderBox>
    </HeaderComponent>
  );
};

export default Header;
