import React from "react";
import styled from "styled-components";

import logo from "../../images/fnk.svg";

const InfoContainer = styled.div`
  /* padding: 10px; */
`;

const Info = () => {
  return (
    <InfoContainer>
      <img src={logo} alt="fnksavings logo" />
      <p style={{ fontSize: "22px" }}>
        At F&K Savings we intend to help millions of people reach their savings
        goals and increase their money.
      </p>
      <small>
        F&K Savings Limited, {new Date().getFullYear()}. All rights reserved.
      </small>
      <br />
      <small>Company Registration Number: 123456</small>
    </InfoContainer>
  );
};

export default Info;
