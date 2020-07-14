import styled from "styled-components";

export const InfoText = styled.h1`
  margin: 0;
  @media (min-width: ${({ theme }) => theme.breakpointXs}) {
    font-size: calc(2.4rem + 6 * ((100vw - 320px) / 680));
  }
  @media (min-width: ${({ theme }) => theme.breakpointSm}) {
    font-size: calc(2.8rem + 6 * ((100vw - 320px) / 680));
  }
  @media (min-width: ${({ theme }) => theme.breakpointMd}) {
    font-size: calc(3rem + 6 * ((100vw - 320px) / 680));
  }
  @media (min-width: ${({ theme }) => theme.breakpointLg}) {
    font-size: 4rem;
  }
`;
