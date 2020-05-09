import React from 'react'
import { Helmet } from "react-helmet"
import TitleFont from "../../../static/fonts/Poppins-Medium.woff2"
import BodyFont from "../../../static/fonts/Poppins-Regular.woff2"
import "../../../static/reboot.css"


const Layout = ({children}) => (
    <>
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
    </Helmet>
    <main className="content" role="main">
      {children}
    </main>
   <footer></footer>
  </>
)

export default Layout