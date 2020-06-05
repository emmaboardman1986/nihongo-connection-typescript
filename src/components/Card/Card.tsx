import React from "react"
import { StyledCard } from "./CardStyles"

export interface CardProps {
  bgColor?: "primary" | "primaryLight" | "secondary" | "secondaryLight" | "black",
  border?: string
  children: any
  noPadding?: boolean
}

const Card = ({ bgColor, children, border, noPadding }:CardProps) => {
  return (
    <StyledCard bgColor={bgColor} border={border} noPadding={noPadding}>
      {children}
    </StyledCard>
  )
}



export default Card
