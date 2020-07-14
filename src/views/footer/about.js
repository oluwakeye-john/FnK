import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row unwrap;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
  }
`;

const Section = styled.div`
  width: 40%;
  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    width: 100%;
  }
`;

const SectionHeading = styled.h4`
  margin-top: 0;
  text-transform: uppercase;
`;

const SectionItem = styled(Link)`
  margin-bottom: 8px;
  display: block;
  text-decoration: none;
  color: inherit;

  transition: 0.2s;

  &:hover {
    color: #fff;
    transform: scale(1.03);
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Section>
        <SectionHeading>About</SectionHeading>
        <SectionItem to="/">Customers</SectionItem>
        <SectionItem to="/">Products</SectionItem>
        <SectionItem to="/">Careers</SectionItem>
        <SectionItem to="/">Blog</SectionItem>
        <SectionItem to="/">Terms</SectionItem>
      </Section>
      <Section>
        <SectionHeading>Help</SectionHeading>
        <SectionItem to="/">How it works</SectionItem>
        <SectionItem to="/">FAQ'S</SectionItem>
      </Section>
    </AboutContainer>
  );
};

export default About;
