import React from "react"
import { StyledCard } from "./CardStyles"

export interface CardProps {
  bgColor?:
    | "primary"
    | "primaryLight"
    | "secondary"
    | "secondaryLight"
    | "black"
    | "white"
  border?: string
  children: any
  noPadding?: boolean
  fullWidth?: boolean
}

const Card = ({ bgColor, children, border, noPadding, fullWidth }: CardProps) => {
  return (
    <StyledCard
      bgColor={bgColor}
      border={border}
      noPadding={noPadding}
      fullWidth={fullWidth}
    >
      {children}
    </StyledCard>
  )
}

export default Card
