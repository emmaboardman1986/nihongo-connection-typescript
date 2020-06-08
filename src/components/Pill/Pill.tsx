import React from "react"
import { StyledPill } from "./PillStyles"
import VerticalSpacing from "../VerticalSpacing"

export interface PillProps {
  name: string
  ariaPressed: boolean
}

const Pill = ({  text, onClick, ariaPressed = false }) => {
  return (
    <>
      <StyledPill
        onClick={onClick}
        aria-pressed={ariaPressed}
        type="button"
      >
        {text}
      </StyledPill>
      <VerticalSpacing size={{_: "baseLoose"}}></VerticalSpacing>
    </>
  )
}

export default Pill
