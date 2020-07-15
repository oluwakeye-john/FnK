import styled from "styled-components";

export const Input = styled.div`
  width: 80%;
  margin: 2rem auto;
`;

export const InputBox = styled.input`
  width: 100%;
  padding: 20px 20px;
  background-color: #020e91;
  border: 0;
  border-radius: 20px;
  color: inherit;
  border: 2px solid ${({ theme }) => theme.primary};
  transition: 0.3s;

  &:focus {
    outline: 0;
    border: 2px solid #ccc;
  }
`;
