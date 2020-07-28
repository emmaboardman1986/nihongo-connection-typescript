import React from "react"
import { StyledBodyText } from "./BodyTextStyles"

export interface BodyTextProps {
  children: string | Element
}
const BodyText = ({ children }: BodyTextProps) => {
  return <StyledBodyText>{children}</StyledBodyText>
}



export default BodyText
