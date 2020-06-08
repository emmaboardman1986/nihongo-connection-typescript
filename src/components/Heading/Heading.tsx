import React from "react"

import { StyledHeading } from "./HeadingStyles"

export interface HeadingProps {
  children: any
  element?: "h1" | "h2" | "h3" | "h4"
  className?: string
}

const Heading = ({ element = "h1", children, className }: HeadingProps) => {
  return (
    <StyledHeading className={className} as={element}>
      {children}
    </StyledHeading>
  )
}

export default Heading
