import React from "react"
import styled from "styled-components"
import TimelineDate from "./TimelineDate"
import Card from "../contentContainers/Card"

import { breakpoint, setFont, setColor } from "../../styles/styleHelpers"


const TimelineContent = ({ year, content }) => {
  function createMarkup(content) {
    return { __html: content }
  }

  return (
    <TimelineContentWrapper>

      <Card>
        <TimelineDate>{year}</TimelineDate>
        <p dangerouslySetInnerHTML={createMarkup(content)}></p>
      </Card>
    
    </TimelineContentWrapper>
  )
}

const TimelineContentWrapper = styled.div`
  flex-grow: 1;
  ${breakpoint.sm`
  flex-grow: 0;
  width: 45%;
  `}
  /* TODO: set innerHTML on BodyText component, replace repeated styles below */
  p {
    font-family: ${setFont.fontSecondary};
    font-size: 1.1rem;
    letter-spacing: 0.01rem;
    line-height: 1.2;
    color: ${setColor.brandBlack};
  }
  /* TODO: have links from data use TextLink component, replace repeated styles below */
  a {
    text-decoration: underline;
    font-family: "Poppins-SemiBold";
    color: ${setColor.brandPrimary};
    &:hover {
      color: ${setColor.brandGreyDark};
      background-color: ${setColor.brandPrimary};
    }
  }
`

export default TimelineContent
