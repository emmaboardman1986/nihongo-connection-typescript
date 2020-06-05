import React from "react"
import styled from "styled-components"
import { HeadingStyles, H1Styles, H2Styles, H3Styles } from "./HeadingStyles"

export interface HeadingProps {
  children: any
  element?: "h1" | "h2" | "h3" | "h4"
  className?: string
}

const Heading = ({ element = "h1", children, className }:HeadingProps) => {
  return <HeadingWrapper className={className} as={element}>{children}</HeadingWrapper>
}

const HeadingWrapper = styled.div`
  ${HeadingStyles};
  ${props => props.as === "h1" && H1Styles};
  ${props => props.as === "h2" && H2Styles};
  ${props => props.as === "h3" && H3Styles};
`

export default Heading
