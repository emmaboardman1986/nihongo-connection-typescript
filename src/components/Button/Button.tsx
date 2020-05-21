import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ButtonStyles, SecondaryButtonStyles, ActionButtonStyles } from "./ButtonStyles"

export interface ButtonProps {
  children: any
  link: string
  isCentered?: boolean
  variant?: "primary" | "secondary"
  onClick?: any
  isExternal?: boolean
  isAction?: boolean
  type: string
  name: string
}

const Button = React.forwardRef((props, ref) => {
  const {
    children,
    link,
    isCentered,
    onClick,
    isExternal,
    isAction,
    isCTA,
    type,
    name,
  } = props

  return (
    <>
      {isAction ? (
        <ActionWrapper
          onClick={onClick}
          isCentered={isCentered}
          type={type}
          ref={ref}
          name={name}
        >
          <span className="visually-hidden">{name}</span>
        </ActionWrapper>
      ) : (
        <LinkWrapper isCentered={isCentered} isCTA={isCTA}>
          {isExternal ? (
            <a href={link} target="_blank">
              {children}
            </a>
          ) : (
            <Link to={link}>{children}</Link>
          )}
        </LinkWrapper>
      )}
    </>
  )
})

const ActionWrapper = styled.button`
  ${ButtonStyles};
  ${ActionButtonStyles};
`

const LinkWrapper = styled.div`
  ${ButtonStyles};
  ${props => props.variant === "secondary" && SecondaryButtonStyles};
  margin-left: ${props => (props.isCentered ? "auto" : null)};
  margin-right: ${props => (props.isCentered ? "auto" : null)};
`

export default Button
