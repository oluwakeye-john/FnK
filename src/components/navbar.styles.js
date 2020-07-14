import styled from "styled-components";
import { Link } from "react-router-dom";
import Button, { WhiteButton } from "./button";

export const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.primary};

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row nowrap;

  padding: 1rem 1rem;
  margin: 0px;
  font-size: 1rem;
  color: ${({ theme }) => theme.lightText};

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    flex-direction: column;
    align-items: flex-start;
  }

  position: relative;
`;

export const NavbarLabel = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    justify-content: flex-start;
    width: 40%;
    align-items: flex-start;
  }
`;

export const NavbarToggle = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    display: block;
    position: absolute;
    top: 30px;
    right: 0;
    margin-right: 30px;
    cursor: pointer;
  }
`;

export const NavbarNav = styled.nav`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    padding: 0 30px;
  }
`;

export const NavbarNav2 = styled(NavbarNav)`
  width: 50%;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const NavbarLink = styled(Link)`
  color: ${({ theme }) => theme.lightText};
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    color: ${({ theme }) => theme.textHover};
  }
  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    margin: 1rem 10px;
  }
`;

export const NavbarButton = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    /* padding: 0; */
    width: 200px;
    margin-bottom: 1rem;
  }
`;

export const NavbarWhiteButton = styled(WhiteButton)``;
