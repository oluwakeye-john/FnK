import React from "react";
import Navbar from "./components/navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import Footer from "./components/footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PreFooter from "./components/preFooter";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      {children}
      <PreFooter />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
