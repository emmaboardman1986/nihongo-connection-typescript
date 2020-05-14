import React from "react"
import styled from "styled-components"
import { CardContainerStyles } from "./CardContainerStyles"

const CardContainer = ({ children, noHorizontalScroll }) => {
  return <CardContainerWrapper noHorizontalScroll={noHorizontalScroll}>
  
  {children ? children.length > 1 ? children.map((item, index) =>(<li key={index}>{item}</li>)) : <li>{children}</li> : null }
  
  
  </CardContainerWrapper>
}

const CardContainerWrapper = styled.ul`
  ${CardContainerStyles};
`

export default CardContainer
