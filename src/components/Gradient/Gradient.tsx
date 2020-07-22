import React from "react"
import { StyledGradient } from "./GradientStyles"

export interface GradientProps {
  children: any,
  center?: boolean
}

const Gradient = ({ children, center }: GradientProps) => {
  return <StyledGradient center={center}>{children}</StyledGradient>
}

export default Gradient
