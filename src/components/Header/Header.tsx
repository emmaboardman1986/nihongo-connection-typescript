import React from "react"
import styled from "styled-components"
import { HeaderStyles, HeaderLogoStyles } from "./HeaderStyles"
import Nav from "../Nav"
import { NavContext } from "../../context/NavContext"

export interface HeaderProps {
  
}

const Header = ({}) => {
  return <HeaderWrapper>
      <Nav></Nav>
      <HeaderLogo>Nihongo Connection</HeaderLogo>
  </HeaderWrapper>
}

const HeaderWrapper = styled.header`
  ${HeaderStyles};
`

const HeaderLogo = styled.p`
 ${HeaderLogoStyles};
`

export default Header
