import React from "react"
import { StyledHighlightPillButton, StyledHighlightPillInfo } from "./HighlightPillStyles"

export interface HighlightPillProps {
  children: string
  isAction?: any
  onClick?: any
  color?: string
  bgColor?: string
}

const HighlightPill = ({ children, isAction, onClick, color, bgColor }:HighlightPillProps) => {
  return (
    <>
      {isAction ? (
        <StyledHighlightPillButton onClick={onClick} color={color} bgColor={bgColor}>
          {children}
        </StyledHighlightPillButton>
      ) : (
        <StyledHighlightPillInfo color={color} bgColor={bgColor}>
          {children}
        </StyledHighlightPillInfo>
      )}
    </>
  )
}


export default HighlightPill
