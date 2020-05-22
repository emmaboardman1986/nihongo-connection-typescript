import React, { useContext } from "react"
import styled from "styled-components"
import { HighlightPillStyles } from "./HighlightPillStyles"

export interface HighlightPillProps {
  children: string
  isAction?: any
  onClick?: any
}

const HighlightPill = ({ children, isAction, onClick }) => {
  return (
    <>
      {isAction ? (
        <HighlightPillButton onClick={onClick}>
          {children}
        </HighlightPillButton>
      ) : (
        <HighlightPillInfo>
          <small>{children}</small>
        </HighlightPillInfo>
      )}
    </>
  )
}

const HighlightPillButton = styled.button`
  ${HighlightPillStyles};
`

const HighlightPillInfo = styled.span`
  ${HighlightPillStyles};
`

export default HighlightPill
