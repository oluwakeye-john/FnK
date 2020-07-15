import React from "react";
import styled from "styled-components";

import prefooterleft from "../images/prefooterleft.svg";
import prefooterright from "../images/prefooterright.svg";

import plant from "../images/plant.svg";
import sitting from "../images/sitting.svg";

import Download from "./downloadButton";

const PreFooterContainer = styled.div`
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
`;

const PreFooterHeading = styled.h1`
  color: ${({ theme }) => theme.headingText};
  font-size: 3rem;
  max-width: 590px;
  margin: 0 auto;
  margin-top: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    font-size: 2rem;
  }
`;

const PreFooterImage = styled.div`
  position: absolute;
  @media (max-width: ${({ theme }) => theme.breakpointLg}) {
    display: none;
  }
  z-index: -1;
`;

const PreFooterRightImage = styled(PreFooterImage)`
  background: url('${prefooterright}') no-repeat center;
  background-position: top right;
  background-size: contain;

  top: 80px;
  right: 0;
  width: 23%;
  height: 105%;
  /* z-index: -1; */
`;

const PreFooterLeftImage = styled(PreFooterImage)`
  background: url('${prefooterleft}') no-repeat center;
  background-position: top left;
  background-size: contain;

  top: -100px;
  left: 0;
  width: 23%;
  height: 65%;
`;

const PlantSection = styled(PreFooterImage)`
  position: absolute;
  top: -30px;
  right: 100px;
  width: 450px;
  height: 400px;
  background: url('${plant}') no-repeat center;
  background-position: top right;
  background-size: cover;
  mix-blend-mode: darken;
  z-index:1;
`;

const Sitting = styled(PreFooterImage)`
  position: absolute;
  top: 20px;
  right: 100px;
  width: 300px;
  height: 300px;
  background: url('${sitting}') no-repeat center;
  background-position: top right;
  background-size: cover;
  mix-blend-mode: darken;
  z-index:2;
  `;

const PreFooter = () => {
  return (
    <PreFooterContainer>
      <PreFooterLeftImage />
      <PreFooterRightImage>
        <PlantSection />
        <Sitting />
      </PreFooterRightImage>
      <div>
        <PreFooterHeading>
          Start saving and investing in just 3 minutes.
        </PreFooterHeading>
        <Download />
      </div>
    </PreFooterContainer>
  );
};

export default PreFooter;
