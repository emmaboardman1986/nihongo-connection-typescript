import React from "react"
import styled from "styled-components"
import { CardStyles, ColorCardStyles, BorderCardStyles} from "./CardStyles"

export interface CardProps {
  bgColor?: "primary" | "secondary" | "black",
  border?: string
  children: any
}

const Card = ({ bgColor, children, border }) => {
  return (
    <CardWrapper bgColor={bgColor} border={border}>
      {children}
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  ${CardStyles};
  ${props => props.bgColor && ColorCardStyles};
  ${props => props.border && BorderCardStyles};
`

export default Card
