import React from "react"
import styled from 'styled-components'
import { AnchorSpanStyles } from "./AnchorSpanStyles"

export interface AnchorSpanProps {
    id: string
}

const AnchorSpan = ({ id }) => {
  return <AnchorSpanWrapper id={id}></AnchorSpanWrapper>
}

const AnchorSpanWrapper = styled.span`
 ${AnchorSpanStyles};
`

export default AnchorSpan
