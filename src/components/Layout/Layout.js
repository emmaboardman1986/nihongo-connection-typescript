import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Header from "../Header"
import TitleFont from "../../../static/fonts/Axiforma-Black.woff2"
import BodyFont from "../../../static/fonts/Poppins-Regular.woff2"
import BodyFontMedium from "../../../static/fonts/Poppins-Medium.woff2"
import Footer from "../Footer"
import Main from "../Main"
import CookieBanner from "../CookieBanner"

import "../../../static/reboot.css"
import "../../../static/fonts/fonts.css"
import { useGetCookie } from "../../customHooks/useGetCookie"

const Layout = ({ children }) => {
  if (useGetCookie("acceptTrackingCookies")) {
    if (typeof window !== "undefined") {
      var dataLayer = (window.dataLayer = window.dataLayer || [])
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag("js", new Date())
      gtag("config", "UA-172528940-1")
    }
  }

  return (
    <>
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
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-172528940-1"
          ></script>
        </Helmet>
        <Header></Header>
        <Main>{children}</Main>
        <Footer></Footer>
      </Container>
      <CookieBanner></CookieBanner>
    </>
  )
}

const Container = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`

export default Layout
