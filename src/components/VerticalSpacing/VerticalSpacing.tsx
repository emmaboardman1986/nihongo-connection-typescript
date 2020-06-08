import React from "react"
import { StyledVerticalSpacing } from "./VerticalSpacingStyles"

type SpacingTypes =
  | "none"
  | "xTight"
  | "tight"
  | "baseTight"
  | "base"
  | "loose"
  | "xLoose"
  | "xxLoose"

export interface VerticalSpacingProps {
  size?: {
    _?: SpacingTypes
    xs?: SpacingTypes
    sm?: SpacingTypes
    md?: SpacingTypes
    lg?: SpacingTypes
    xl?: SpacingTypes
  }
}

const VerticalSpacing = ({ size = { _: "base" } }:VerticalSpacingProps) => {
  return <StyledVerticalSpacing size={size}></StyledVerticalSpacing>
}


export default VerticalSpacing
