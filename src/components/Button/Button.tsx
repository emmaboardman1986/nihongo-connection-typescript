import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ButtonStyles, SecondaryButtonStyles } from "./ButtonStyles"

export interface ButtonProps {
  name: string
  link: string
  alignCenter: boolean,
  variant?: "primary" | "secondary"
}

const Button = ({ name, link, alignCenter, variant = "primary"}) => {
  return (
    <ButtonWrapper alignCenter={alignCenter} variant={variant}>
      <Link to={link}>{name}</Link>
    </ButtonWrapper>
  )
}


const ButtonWrapper = styled.div`
  ${ButtonStyles}
  ${props => props.variant === "secondary" && SecondaryButtonStyles};
`

export default Button
