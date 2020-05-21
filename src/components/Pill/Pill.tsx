import React from "react"
import styled from "styled-components"
import { PillStyles } from "./PillStyles"
import VerticalSpacing from "../utilities/VerticalSpacing"

export interface PillProps {
  name: string
  ariaPressed: boolean
}

const Pill = ({  text, onClick, ariaPressed = false }) => {
  return (
    <>
      <PillWrapper
        onClick={onClick}
        aria-pressed={ariaPressed}
        type="button"
      >
        {text}
      </PillWrapper>
      <VerticalSpacing size={{_: "baseLoose"}}></VerticalSpacing>
    </>
  )
}

const PillWrapper = styled.button`
  ${PillStyles}
`

export default Pill
