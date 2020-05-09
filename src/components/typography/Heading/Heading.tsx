import React from "react"
import styled from "styled-components"
import { HeadingStyles, H1Styles, H2Styles } from "./HeadingStyles"

export interface HeadingProps {
  element?: "h1" | "h2" | "h3" | "h4"
  text: string
}

const Heading = ({ element = "h1", children }) => {
  return <HeadingWrapper as={element}>{children}</HeadingWrapper>
}

const HeadingWrapper = styled.div`
  ${HeadingStyles};
  ${props => props.as === "h1" && H1Styles};
  ${props => props.as === "h2" && H2Styles};
`

export default Heading
