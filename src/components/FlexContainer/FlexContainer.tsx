import React from "react"
import { StyledFlexContainer } from "./FlexContainerStyles"

export interface FlexContainerProps {
  flexDirection?: {
    _: "column" | "row"
  }
  justifyContent?: {
    _: "space-between" | "flex-start" | "flex-end" | "center"
  }
  alignItems?: {
    _: "flex-end" | "flex-start" | "center"
  }
  element?: "ul" | "div"
  children: any
  horizontalScroll?: boolean
  flexWrap?: boolean
}

const FlexContainer = ({
  children,
  flexDirection = { _: "row" },
  justifyContent = { _: "flex-start" },
  alignItems = { _: "flex-start" },
  horizontalScroll,
  element = "div",
  flexWrap
}: FlexContainerProps) => {
  return (
    <StyledFlexContainer
      as={element}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      horizontalScroll={horizontalScroll}
      alignItems={alignItems}
      flexWrap={flexWrap}
    >
      {children}
    </StyledFlexContainer>
  )
}

export default FlexContainer
