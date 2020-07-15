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
  /* display: none; */
  visibility: hidden;
  transition: transform 0.5s;
  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    /* display: block; */
    visibility: visible;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    position: absolute;
    top: 30px;
    right: 0;
    margin-right: 30px;
    cursor: pointer;
  }
`;

export const NavbarNav = styled.nav`
  background-color: ${({ theme }) => theme.primary};
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(100px)" : "translateY(-60vh)"};
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    padding: 0 30px;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 1px solid #ccc;
    z-index: 2;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.primary},
      #313199
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    justify-content: flex-end;
  }
`;

export const NavbarNav2 = styled(NavbarNav)`
  width: 40%;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpointMd}) {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: none;
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

  @media (max-width: ${({ theme }) => theme.breakpointLg}) {
    padding: 1rem 2rem;
  }
`;

export const NavbarWhiteButton = styled(WhiteButton)`
  @media (max-width: ${({ theme }) => theme.breakpointLg}) {
    padding: 1rem 2rem;
  }
`;
