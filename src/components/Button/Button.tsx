import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  StyledActionButton,
  StyledLinkButton,
} from "./ButtonStyles"

export interface ButtonProps {
  children: string
  link: string
  isCentered?: boolean
  variant?: "primary" | "secondary"
  isExternal?: boolean
  isAction?: boolean
  /** required for action buttons */
  onClick?: any
  type?: string //
  name?: string
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
    type,
    name,
  } = props

  return (
    <>
      {isAction ? (
        <StyledActionButton
          onClick={onClick}
          isCentered={isCentered}
          type={type}
          // used to apply class styling on click
          ref={ref}
          name={name}
        >
          <span className="visually-hidden">{name}</span>
        </StyledActionButton>
      ) : (
        <StyledLinkButton isCentered={isCentered} variant={variant}>
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
