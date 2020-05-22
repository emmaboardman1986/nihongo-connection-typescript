import React from "react"
import styled from "styled-components"
import Heading from "../ui/typography/Heading"
import { setColor } from "../../styles/styleHelpers"

const TimelineDate = ({ children }) => {
  return (
    <TimelineDateWrapper>
      <Heading variant="h3" text={children}></Heading>
    </TimelineDateWrapper>
  )
}

const TimelineDateWrapper = styled.div`
  h3 {
    color: ${setColor.brandPrimary};
    font-size: 2rem;
    margin: 0;
  }
`

export default TimelineDate

// if there is a responsiveBreakpoint variable,
