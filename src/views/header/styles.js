import styled from "styled-components"

import BgShape from "../../images/Bg Shape.svg"
import dots from "../../images/Group.png"

export const HeaderComponent = styled.div`
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
`

export const HeaderBox = styled.div`
  max-width: 992px;
  color: white;
  padding: 0 2rem;

  font-weight: bold;
`

export const RectBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 60%;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  z-index: -1;
`

export const Dots = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background: url('${dots}');
  background-position: center ${({ align }) =>
    align === "right" ? "right" : "left"};
  background-size: 300px;
  background-repeat: no-repeat;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: -1;
`
