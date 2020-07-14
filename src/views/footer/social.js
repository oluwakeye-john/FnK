import React from "react";
import styled from "styled-components";

import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";

const SocialMain = styled.div``;

const SocialHeading = styled.h4`
  margin-top: 0;
  text-transform: uppercase;
`;

const SocialEllipse = styled.a`
  border-radius: 50%;
  width: 50px;
  text-align: center;
  height: 50px;
  line-height: 45px;
  padding: 0;
  background-color: #3843ac;
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;

  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const SocialImage = styled.img`
  vertical-align: middle;
  text-align: center;
`;

const SocialExtras = styled.small`
  display: block;
  margin-bottom: 20px;
  line-height: 1.3rem;
`;

const Social = () => {
  return (
    <div>
      <SocialHeading style={{ marginTop: "0" }}>
        <strong>SOCIAL</strong>
      </SocialHeading>
      <SocialMain>
        <SocialEllipse href="#">
          <SocialImage src={facebook} alt="facebook" />
        </SocialEllipse>
        <SocialEllipse href="#">
          <SocialImage src={twitter} alt="twitter" />
        </SocialEllipse>
        <SocialEllipse href="#">
          <SocialImage src={instagram} alt="instagram" />
        </SocialEllipse>
      </SocialMain>
      <SocialExtras>
        No. 3, Ayo Adekunle Close, New-Bodija Estate, Ibadan, Oyo state.
      </SocialExtras>
      <SocialExtras>
        hello@fandksavings.com.ng
        <br />
        081-045-962-33 (Main)
      </SocialExtras>
    </div>
  );
};

export default Social;
