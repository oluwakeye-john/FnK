import React from "react"
import Navbar from "./views/navbar"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import GlobalStyles from "./styles/globalStyles"
import Footer from "./views/footer"
import "@fortawesome/fontawesome-free/css/all.min.css"
import Download from "./views/download"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      {children}
      <Download />
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
