import React from "react"
import styled from "styled-components"
import { VerticalSpacingStyles } from "./VerticalSpacingStyles"

export interface VerticalSpacingProps {
  size?: "small" | "medium" | "large" | "x-large"
}

const VerticalSpacing = ({ size = "medium"}) => {
  return <VerticalSpacingWrapper size={size}></VerticalSpacingWrapper>
}

const VerticalSpacingWrapper = styled.div`
  ${VerticalSpacingStyles};
`

export default VerticalSpacing
