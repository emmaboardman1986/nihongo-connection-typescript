import React from "react"
import {
  FlexContainerStyles,
  JustifyContentStyles,
  DirectionStyles,
} from "./FlexContainerStyles"
import styled from "styled-components"

export interface FlexContainerProps {
  flexDirection?: {
    _: "column" | "row"
  }
  justifyContent?: {
    _: "space-between" | "flex-start" | "flex-end"
   }
   element?: "ul" | "div"
}

const FlexContainer = ({ children, flexDirection = "row", justifyContent = "flex-start", horizontalScroll, element="div" }) => {
  return (
    <FlexContainerWrapper as={element} flexDirection={flexDirection} justifyContent={justifyContent} horizontalScroll={horizontalScroll}>
      {children}
    </FlexContainerWrapper>
  )
}

const FlexContainerWrapper = styled.div`
  ${FlexContainerStyles};
  ${props => props.flexDirection && DirectionStyles(props.flexDirection)};
  ${props => props.justifyContent && JustifyContentStyles(props.justifyContent)};
`

export default FlexContainer
