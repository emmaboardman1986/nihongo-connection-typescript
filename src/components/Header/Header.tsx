import React from "react"
import { Link } from "gatsby"
import { StyledHeader, StyledHeaderLogo } from "./HeaderStyles"
import Nav from "../Nav"

const Header = ({}) => {
  return (
    <StyledHeader>
      <Nav></Nav>
      <StyledHeaderLogo>
        <Link to="/">Nihongo Connection</Link>
      </StyledHeaderLogo>
    </StyledHeader>
  )
}

export default Header
