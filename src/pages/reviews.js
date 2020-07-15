import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import reviewJson from "../data/reviews.json";

import { InfoText } from "../components/text";
import Card, {
  CardList,
  CardHeading,
  CardText,
  CardImg,
} from "../components/card";

import user from "../images/user.png";
import reviewBg from "../images/reviewBg.svg";

const ReviewContainer = styled.div`
  padding: 0 20px;
  margin: 8rem 0;
  position: relative;
`;

const ReviewBg = styled.div`
  background-image: url('${reviewBg}');
  background-position: top right ;
  background-size:contain;
  background-repeat: no-repeat;
  position: absolute;
  top: -200px;
  right: 0;
  height: 140%;
  width: 140%;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    display: none;
  }
`;

const Reviews = () => {
  return (
    <div>
      <Header>
        <InfoText>What Our Customers are saying</InfoText>
      </Header>
      <ReviewContainer>
        <ReviewBg />
        <CardList>
          {reviewJson.map((rev, index) => (
            <Card key={index}>
              <CardImg>
                <img
                  src={user}
                  alt="user review"
                  style={{ width: "50px", height: "50px" }}
                />
              </CardImg>
              <CardHeading>{rev.name}</CardHeading>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                nunc dolor mi, lacus. Pretium viverra velit et, duis natoque sit
                libero arcu. Condimentum nisl quam ac tristique sagittis
              </CardText>
            </Card>
          ))}
        </CardList>
      </ReviewContainer>
    </div>
  );
};

export default Reviews;
