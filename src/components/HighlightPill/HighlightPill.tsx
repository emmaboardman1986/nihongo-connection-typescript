import React, { useContext } from "react"
import { StyledHighlightPillButton, StyledHighlightPillInfo } from "./HighlightPillStyles"

export interface HighlightPillProps {
  children: string
  isAction?: any
  onClick?: any
}

const HighlightPill = ({ children, isAction, onClick }:HighlightPillProps) => {
  return (
    <>
      {isAction ? (
        <StyledHighlightPillButton onClick={onClick}>
          {children}
        </StyledHighlightPillButton>
      ) : (
        <StyledHighlightPillInfo>
          {children}
        </StyledHighlightPillInfo>
      )}
    </>
  )
}


export default HighlightPill
