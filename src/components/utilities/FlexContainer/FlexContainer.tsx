import React from "react"
import {
  FlexContainerStyles,
  JustifyContentStyles,
  DirectionStyles,
  AlignItemsStyles
} from "./FlexContainerStyles"
import styled from "styled-components"

export interface FlexContainerProps {
  flexDirection?: {
    _: "column" | "row"
  }
  justifyContent?: {
    _: "space-between" | "flex-start" | "flex-end"
   }
   alignItems?: {
    _: "flex-end" | "flex-start" | "center"
   }
   element?: "ul" | "div"
}

const FlexContainer = ({ children, flexDirection = "row", justifyContent = "flex-start", alignItems = "flex-start", horizontalScroll, element="div" }) => {
  return (
    <FlexContainerWrapper as={element} flexDirection={flexDirection} justifyContent={justifyContent} horizontalScroll={horizontalScroll} alignItems={alignItems}>
      {children}
    </FlexContainerWrapper>
  )
}

const FlexContainerWrapper = styled.div`
  ${FlexContainerStyles};
  ${props => props.flexDirection && DirectionStyles(props.flexDirection)};
  ${props => props.justifyContent && JustifyContentStyles(props.justifyContent)};
  ${props => props.alignItems && AlignItemsStyles(props.alignItems)};
`

export default FlexContainer
