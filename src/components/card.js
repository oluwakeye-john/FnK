import styled from "styled-components";

export const CardList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  width: 42%;
  border-radius: 20px;
  margin-bottom: 3rem;
  padding: 3rem;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 20px #ccc;
  }

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    width: 100%;
  }
`;

export const CardHeading = styled.h3`
  margin: 0;
  color: #474747;
`;

export const CardText = styled.p`
  color: #757575;
  font-size: 16px;
`;

export const CardImg = styled.div`
  float: left;
  margin-right: 20px;
  height: 120%;
`;

export default Card;
