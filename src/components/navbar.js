import React, { useState } from "react";

import Label from "../images/fnk.svg";

import {
  NavbarContainer,
  NavbarLink,
  NavbarLabel,
  NavbarNav,
  NavbarNav2,
  NavbarToggle,
  NavbarButton as Button,
  NavbarWhiteButton as WhiteButton,
} from "./navbar.styles";

const linkItems = [
  {
    name: "Customers",
    path: "/",
  },
  {
    name: "Products",
    path: "/",
  },
  {
    name: "About",
    path: "/",
  },
  {
    name: "Learn",
    path: "/",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = (e) => {
    e.target.className = !navbarOpen ? "fas fa-times" : "fas fa-bars";
    setNavbarOpen(!navbarOpen);
  };
  return (
    <NavbarContainer>
      <NavbarLabel>
        <img src={Label} alt="fansksavings" />
      </NavbarLabel>
      <NavbarToggle>
        <span
          onClick={handleNavbarToggle}
          className="fas fa-bars"
          style={{ fontSize: "20px" }}
        />
      </NavbarToggle>
      <NavbarNav isOpen={navbarOpen}>
        {linkItems.map((item, index) => (
          <NavbarLink to={item.path} key={index}>
            {item.name}
          </NavbarLink>
        ))}
      </NavbarNav>
      <NavbarNav2 isOpen={navbarOpen}>
        <Button>Log In</Button>
        <WhiteButton>Create A Free Account</WhiteButton>
      </NavbarNav2>
    </NavbarContainer>
  );
};

export default Navbar;
