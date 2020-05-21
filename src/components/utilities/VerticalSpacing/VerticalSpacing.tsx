import React from "react"
import styled from "styled-components"
import { VerticalSpacingStyles, SizeStyles } from "./VerticalSpacingStyles"

export interface VerticalSpacingProps {
  size?: {
    _: "none" | "xTight" | "tight" | "baseTight" | "base" | "loose" | "xLoose" | "xxLoose"
  }
}



const VerticalSpacing = ({ size = {_: "medium"}}) => {
  return <VerticalSpacingWrapper size={size}></VerticalSpacingWrapper>
}

const VerticalSpacingWrapper = styled.div`
  ${VerticalSpacingStyles};
  ${props => props.size && SizeStyles(props.size)};
  
`

export default VerticalSpacing
