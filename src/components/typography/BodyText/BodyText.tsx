import React from "react"
import styled from 'styled-components'
import { BodyTextStyles } from "./BodyTextStyles"

const BodyText = ({children}) => {
  return <BodyTextWrapper>{children}</BodyTextWrapper>
}

const BodyTextWrapper = styled.p`
 ${BodyTextStyles};
`

export default BodyText
