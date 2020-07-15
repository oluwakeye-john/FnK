import styled from "styled-components"

import prefooterleft from "../../images/prefooterleft.svg"
import prefooterright from "../../images/prefooterright.svg"

import plant from "../../images/plant.png"
import sitting from "../../images/sitting.svg"

import dots from "../../images/Group2.svg"

export const PreFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;
  height: 34rem;
  position: relative;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    display: none;
  }

  z-index: 1;
`

export const PreFooterHeading = styled.h1`
  color: ${({ theme }) => theme.headingText};
  font-size: 3rem;
  max-width: 590px;
  margin: 0 auto;
  margin-top: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    font-size: 2rem;
  }
`

export const PreFooterImage = styled.div`
  position: absolute;
  @media (max-width: ${({ theme }) => theme.breakpointLg}) {
    display: none;
  }
  pointer-events: none;
`

export const PreFooterRightImage = styled(PreFooterImage)`
  background: url('${prefooterright}') no-repeat center;
  background-position: top right;
  background-size: 280px;

  top: 80px;
  right: 0;
  width: 100%;
  height: 100%;
  /* z-index: -1; */
`

export const PreFooterLeftImage = styled(PreFooterImage)`
  background: url('${prefooterleft}');
  background-repeat: no-repeat;

  background-position: top left;
  background-size: 180px;

  top: -100px;
  left: 0;
  width: 100%;
  height: 100%;
`

export const PlantSection = styled(PreFooterImage)`
  position: absolute;
  top: 70px;
  right: 80px;

  background: url('${plant}') no-repeat center;
  background-position: top right;
  background-size: 300px;

  width: 100%;
  height: 100%;
`

export const Sitting = styled(PreFooterImage)`
  position: absolute;
  top: 0;
  right: 100px;

  background: url('${sitting}') no-repeat center;
  background-position: top right;
  background-size: 300px;

  width: 100%;
  height: 100%;
  `

export const Dots = styled(PreFooterImage)`
  position: absolute;
  top: 50px;
  right: 5px;

  background: url('${dots}') no-repeat center;
  background-position: top right;
  background-size: 100px;
  /* mix-blend-mode: overlay; */

  width: 100%;
  height: 100%;
`
