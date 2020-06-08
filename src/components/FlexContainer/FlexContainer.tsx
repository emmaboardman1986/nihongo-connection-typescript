import React from "react"
import { StyledFlexContainer } from "./FlexContainerStyles"

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
  children: any
  horizontalScroll?: boolean
}

const FlexContainer = ({
  children,
  flexDirection = { _: "row" },
  justifyContent = { _: "flex-start" },
  alignItems = { _: "flex-start" },
  horizontalScroll,
  element = "div",
}: FlexContainerProps) => {
  return (
    <StyledFlexContainer
      as={element}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      horizontalScroll={horizontalScroll}
      alignItems={alignItems}
    >
      {children}
    </StyledFlexContainer>
  )
}

export default FlexContainer
