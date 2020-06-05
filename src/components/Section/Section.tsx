import React from "react"
import { StyledSection } from "./SectionStyles"

export interface SectionProps {
  children: any
}

const Section = ({ children }:SectionProps) => {
  return <StyledSection>{children}</StyledSection>
}

export default Section
