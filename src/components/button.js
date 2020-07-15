import styled from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.lightText};
  background-color: ${({ theme }) => theme.lighterPrimary};
  border: 0;
  padding: 15px 30px;
  border-radius: 10px;
  margin-right: 20px;
  transition: 0.3s;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.lightText};
    color: ${({ theme }) => theme.primary};
    transform: scale(1.05);
    border: 1px solid ${({ theme }) => theme.lightText};
  }

  &:active,
  &:focus {
    outline: 0;
  }
`;

export const WhiteButton = styled(Button)`
  background-color: ${({ theme }) => theme.textHover};
  color: black;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.lightText};
  }
`;

export default Button;
