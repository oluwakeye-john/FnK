import React, { useState } from "react"
import { Link } from "react-router-dom"
import Label from "../../images/fnk.svg"

import {
  NavbarContainer,
  NavbarLink,
  NavbarLabel,
  NavbarNav,
  NavbarNav2,
  NavbarToggle,
  NavbarButton as Button,
  NavbarWhiteButton as WhiteButton,
} from "./styles"

const linkItems = [
  {
    name: "Faq",
    path: "/faq",
  },
  {
    name: "Reviews",
    path: "/reviews",
  },
  {
    name: "About",
    path: "/",
  },
  {
    name: "Learn",
    path: "/",
  },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const toggler = React.createRef()

  const handleNavbarToggle = (e) => {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <NavbarContainer>
      <NavbarLabel>
        <Link to="/">
          <img src={Label} alt="fansksavings" ref={toggler} />
        </Link>
      </NavbarLabel>
      <NavbarToggle isOpen={navbarOpen}>
        <span
          onClick={handleNavbarToggle}
          className={navbarOpen ? "fas fa-times" : "fas fa-bars"}
          style={{ fontSize: "20px" }}
        />
      </NavbarToggle>
      <NavbarNav isOpen={navbarOpen} onClick={handleNavbarToggle}>
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
  )
}

export default Navbar
