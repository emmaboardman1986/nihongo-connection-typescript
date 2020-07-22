import React from "react"
import { StyledSection } from "./SectionStyles"

export interface SectionProps {
  children: any,
  bgImg?: string
}

const Section = ({ children, bgImg }:SectionProps) => {
  return <StyledSection bgImg={bgImg}>{children}</StyledSection>
}

export default Section
