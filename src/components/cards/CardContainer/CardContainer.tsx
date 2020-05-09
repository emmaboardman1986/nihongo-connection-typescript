import React from "react"
import styled from "styled-components"
import { CardContainerStyles } from "./CardContainerStyles"

const CardContainer = ({ children }) => {
  return <CardContainerWrapper>{children.map((item, index) =>(<li key={index}>{item}</li>))}</CardContainerWrapper>
}

const CardContainerWrapper = styled.ul`
  ${CardContainerStyles};
`

export default CardContainer
