import React from "react";
import styled from "styled-components";

import Social from "../views/footer/social";
import Info from "../views/footer/info";

import footerBg1 from "../images/footerBg1.svg";
import footerBg2 from "../images/footerBg2.svg";
import footerBg3 from "../images/footerBg3.svg";
import About from "../views/footer/about";

const FooterContainer = styled.div`
  color: rgba(255, 255, 255, 0.8);
  background-color: #fff;
  position: relative;
  height: 500px;
  padding-top: 12rem;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    padding: 0.5rem;
    background-color: #313199;
    height: 100%;
  }
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-flow: row unwrap;

  max-width: 1200px;
  margin: 0 auto;
  text-align: left;

  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    flex-direction: column;
    justify-content: center;
  }

  & > div {
    margin-bottom: 1.5rem;
  }
`;

const FooterBkgs = styled.div`
  pointer-events: none;
  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    & > div {
      display: none;
    }
  }
`;

const FooterBg1 = styled.div`
  position: absolute;
  background: url('${footerBg1}') no-repeat center;
  background-position: top left;
  background-size: cover;

  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #252D7C;
  z-index: -1;
`;

const FooterBg2 = styled.div`
    position: absolute;
  background: url('${footerBg2}') no-repeat center;
  background-position: top left;
  background-size: cover;

  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const FooterBg3 = styled.div`
    position: absolute;
  background: url('${footerBg3}') no-repeat center;
  background-position: top left;
  background-size: contain;

  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const FooterBg4 = styled.div`
  background-color: #252d7c;
  position: absolute;
  bottom: 0;
  height: 50%;
  width: 100%;
  z-index: -1;
  left: 0;
`;

const InfoFooter = styled.div`
  text-align: left;
  width: 35%;
  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    width: 100%;
    margin: 0;
  }
`;

const AboutFooter = styled.div`
  text-align: left;
  width: 25%;
  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    width: 100%;
  }
`;

const SocialFooter = styled.div`
  text-align: left;
  width: 25%;
  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterBkgs>
          <FooterBg4 />
          <FooterBg1 />
          <FooterBg2 />
          <FooterBg3 />
        </FooterBkgs>
        <InfoFooter>
          <Info />
        </InfoFooter>
        <AboutFooter>
          <About />
        </AboutFooter>
        <SocialFooter>
          <Social />
        </SocialFooter>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
