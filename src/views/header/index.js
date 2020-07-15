import React from "react"

import { HeaderComponent, HeaderBox, Dots, RectBox } from "./styles"

const Header = ({ children, align }) => {
  return (
    <HeaderComponent>
      <HeaderBox>
        <RectBox />
        <Dots align={align} />
        {children}
      </HeaderBox>
    </HeaderComponent>
  )
}

export default Header
