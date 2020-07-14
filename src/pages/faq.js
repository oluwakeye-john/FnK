import React from "react";
import Header from "../components/header";

import { InfoText } from "../components/text";
import { Input, InputBox } from "../components/input";

const Faq = () => {
  return (
    <div>
      <Header>
        <InfoText>Frequently Asked Questions</InfoText>
        <Input>
          <InputBox type="text" placeholder="Search for a question" />
        </Input>
      </Header>
    </div>
  );
};

export default Faq;
