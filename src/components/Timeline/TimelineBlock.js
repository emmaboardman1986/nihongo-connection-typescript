import React from "react"
import styled from "styled-components"
import TimelineContent from "./TimelineContent"
import TimelineImage from "./TimelineImage"
import {
  breakpoint,
} from "../../styles/styleHelpers"

const TimelineBlock = ({year, content}) => {
  return (
    <TimelineBlockWrapper>
      <TimelineImage icon="star"></TimelineImage>
      <TimelineContent year={year} content={content}></TimelineContent>
    </TimelineBlockWrapper>
  )
}

const TimelineBlockWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  &:nth-child(even) {
    ${breakpoint.sm`
  flex-direction: row-reverse;
  `}
  }
  &:nth-child(even) .timeline__img {
    ${breakpoint.sm`
    margin-right: calc(5% - 23px);
  `}
  }
`

export default TimelineBlock
