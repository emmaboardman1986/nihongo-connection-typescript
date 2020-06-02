import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { HeaderStyles, HeaderLogoStyles } from "./HeaderStyles"
import Nav from "../Nav"


export interface HeaderProps {
  
}

const Header = ({}) => {
  return <HeaderWrapper>
      <Nav></Nav>
      <HeaderLogo><Link to="/">Nihongo Connection</Link></HeaderLogo>
  </HeaderWrapper>
}

const HeaderWrapper = styled.header`
  ${HeaderStyles};
`

const HeaderLogo = styled.p`
 ${HeaderLogoStyles};
`

export default Header
