import React from 'react'
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Header from "../Header"
import TitleFont from "../../../static/fonts/Axiforma-Black.woff2"
import BodyFont from "../../../static/fonts/Poppins-Regular.woff2"
import BodyFontMedium from "../../../static/fonts/Poppins-Medium.woff2"
import Footer from "../../../src/components/Footer"
import Main from "../../../src/components/Main"
import "../../../static/reboot.css"
import "../../../static/fonts/fonts.css"


const Layout = ({ children }) => (
  <Container>
    <Helmet>
      <link
        rel="preload"
        as="font"
        href={TitleFont}
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={BodyFont}
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={BodyFontMedium}
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Helmet>
    <Header></Header>
    <Main >
      {children}
    </Main>
    <Footer></Footer>
  </Container>
)

const Container = styled.div`
max-width: 1050px;
margin-left: auto;
margin-right: auto;`

export default Layout