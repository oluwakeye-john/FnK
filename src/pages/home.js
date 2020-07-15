import React from "react"
import Header from "../views/header"
import styled from "styled-components"

import { InfoText } from "../components/text"

import SImage from "../images/rbq_enum 1.png"

const ServiceSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
  padding: 5rem 10px;
`

const ServiceImage = styled.img`
  mix-blend-mode: darken;
  max-width: 100%;
  width: 700px;
`

const ServiceHeading = styled.h1`
  color: ${({ theme }) => theme.headingText};
  font-size: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    font-size: 2rem;
  }
`

const ServiceText = styled.p`
  color: ${({ theme }) => theme.lighterText};
  font-size: 1.5rem;
`

const Home = () => {
  return (
    <div>
      <Header align="right">
        <InfoText>
          The first savings and investment platform you’ll love.{" "}
        </InfoText>
      </Header>
      <ServiceSection>
        <div>
          <ServiceImage alt="Save with us" src={SImage} />
          <ServiceHeading>Why do we love what we do?</ServiceHeading>
          <ServiceText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sollicitudin porta facilisis viverra. Eget est vitae orci bibendum.
            Tortor pellentesque vel pellentesque vel. Rutrum sit mauris nisl eu
            diam curabitur. Viverra in consequat, et eget interdum purus etiam.
          </ServiceText>
        </div>
      </ServiceSection>
    </div>
  )
}

export default Home
