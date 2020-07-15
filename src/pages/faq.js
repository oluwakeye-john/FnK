import React from "react"
import Header from "../views/header"
import styled from "styled-components"

import { InfoText } from "../components/text"
import { Input, InputBox } from "../components/input"

import faqs from "../data/faqs.json"

const FaqList = styled.div`
  list-style-type: none;
  width: 100%;
`

const FaqItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    flex-direction: column;
  }
`

const FaqItemHeading = styled.h2`
  width: 30%;
  color: #0d2b76;
  font-size: 40px;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    width: 80%;
    font-size: 30px;
  }
`

const FaqItemQuestionList = styled.div`
  list-style-type: none;
  width: 50%;
  text-align: left;

  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    width: 100%;
    text-align: left;
  }
`

const FaqItemQuestion = styled.div`
  font-size: 20px;
  color: #616161;
  border-bottom: 1px solid #c5c7db;

  padding: 15px 0;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    font-size: 20px;
  }
`

const QuestionList = ({ questions }) => {
  return (
    <>
      {questions.map((que, index) => (
        <FaqItemQuestion key={index}>{que}</FaqItemQuestion>
      ))}
    </>
  )
}

const Faq = () => {
  return (
    <div>
      <Header>
        <InfoText>Frequently Asked Questions</InfoText>
        <Input>
          <InputBox type="search" placeholder="Search for a question" />
        </Input>
      </Header>
      <FaqList>
        {faqs.map((faq, index) => (
          <FaqItem key={index}>
            <FaqItemHeading>{faq.category}</FaqItemHeading>
            <FaqItemQuestionList>
              <QuestionList questions={faq.questions} />
            </FaqItemQuestionList>
          </FaqItem>
        ))}
      </FaqList>
    </div>
  )
}

export default Faq
