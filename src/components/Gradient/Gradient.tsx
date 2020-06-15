import React from "react"
import { StyledGradient } from "./GradientStyles"

export interface GradientProps {
  children: any
}

const Gradient = ({ children }: GradientProps) => {
  return <StyledGradient>{children}</StyledGradient>
}

export default Gradient
