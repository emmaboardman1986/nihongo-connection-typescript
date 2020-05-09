import React from "react"
import {
  FlexContainerStyles,
  justifyContentStyle,
  alignItemsStyle,
  directionStyle,
  widthStyle,
} from "./FlexContainerStyles"
import styled from "styled-components"

export interface FlexContainerProps {
  flexDirection?: {
    _: "column" | "row"
  }
}

const FlexContainer = ({ children, flexDirection = "row" }) => {
  return (
    <FlexContainerWrapper flexDirection={flexDirection}>
      {children}
    </FlexContainerWrapper>
  )
}

const FlexContainerWrapper = styled.div`
  ${FlexContainerStyles}
  ${props => props.flexDirection && directionStyle(props.flexDirection)};
`

export default FlexContainer
