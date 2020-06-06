import React from "react"
import { StyledAriaLiveRegion } from "./AriaLiveRegionStyles"

export interface AriaLiveRegionProps {
  children: any
  ariaLive: "off" | "assertive" | "polite"
  role: string
}
const AriaLiveRegion = ({ children, ariaLive, role }: AriaLiveRegionProps) => {
  return (
    <StyledAriaLiveRegion aria-live={ariaLive} role={role}>
      {children}
    </StyledAriaLiveRegion>
  )
}

export default AriaLiveRegion
