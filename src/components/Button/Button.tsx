import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ButtonStyles } from "./ButtonStyles"

export interface ButtonProps {
  name: string
  link: string
}

const Button = ({ name, link }) => {
  return (
    <ButtonWrapper>
      <Link to={link}>{name}</Link>
    </ButtonWrapper>
  )
}


const ButtonWrapper = styled.div`
  ${ButtonStyles}
`

export default Button
