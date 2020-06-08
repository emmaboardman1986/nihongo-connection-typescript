import React from "react"
import { StyledBodyText } from "./BodyTextStyles"

export interface BodyTextProps {
  children: string
}
const BodyText = ({ children }: BodyTextProps) => {
  return <StyledBodyText>{children}</StyledBodyText>
}



export default BodyText
