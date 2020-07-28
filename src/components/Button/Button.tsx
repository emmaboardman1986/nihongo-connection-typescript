import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StyledActionButton, StyledLinkButton } from "./ButtonStyles"

export interface ButtonProps {
  children?: string
  link?: string
  isCentered?: boolean
  variant?: "primary" | "secondary"
  isExternal?: boolean
  isAction?: boolean
  /** required for action buttons */
  onClick?: any
  type?: string //
  name?: string
  margins?: object
}

const Button = React.forwardRef((props: ButtonProps, ref) => {
  const {
    children,
    link,
    isCentered,
    variant = "primary",
    onClick,
    isExternal,
    isAction,
    margins
  } = props

  return (
    <>
      {isAction ? (
        <StyledActionButton onClick={onClick} margins={margins}>{children}</StyledActionButton>
      ) : (
        <StyledLinkButton isCentered={isCentered} variant={variant} margins={margins}>
          {isExternal ? (
            <a href={link} target="_blank">
              {children}
            </a>
          ) : (
            <Link to={link}>{children}</Link>
          )}
        </StyledLinkButton>
      )}
    </>
  )
})

export default Button
