import React from "react"
import styled from "styled-components"
import { setColor } from "../../styles/styleHelpers"
import {
  TimelineStyles,
  TimelineContainerStyles,
  TimelineBlockWrapperStyles,
  TimelineImageWrapperStyles,
  IconWrapperStyles,
  TimelineContentWrapperStyles
} from "./TimelineStyles"
import Icon from "../Icon"
import RichText from "../RichText"
import Card from "../Card"
import Heading from "../typography/Heading"

export interface TimelineProps {
  timelineContent: []
}

const Timeline = ({ timelineContent = [] }) => {
  return (
    <TimelineWrapper>
      <TimelineContainer>
        {timelineContent.map((contentBlock, index) => {
          return (
            <TimelineBlock
              year={contentBlock.about_us_timeline_year.text}
              content={contentBlock.about_us_timeline_content.html}
              key={index}
            />
          )
        })}
      </TimelineContainer>
    </TimelineWrapper>
  )
}

const TimelineWrapper = styled.div`
  ${TimelineStyles};
`

const TimelineContainer = styled.div`
  ${TimelineContainerStyles}
`

const TimelineBlock = ({ year, content }) => {
  return (
    <TimelineBlockWrapper>
      <TimelineImage icon="star"></TimelineImage>
      <TimelineContent year={year} content={content}></TimelineContent>
    </TimelineBlockWrapper>
  )
}

const TimelineBlockWrapper = styled.div`
  ${TimelineBlockWrapperStyles};
`

const TimelineImage = ({ icon }) => {
  return (
    <TimelineImageWrapper className="timeline__img">
      <IconWrapper data-icon>
        <Icon
          icon={icon}
          color={setColor.brandMonochrome[0]}
          fill={setColor.brandMonochrome[0]}
          stroke={setColor.brandMonochrome[0]}
        />
      </IconWrapper>
    </TimelineImageWrapper>
  )
}

const TimelineImageWrapper = styled.div`
  ${TimelineImageWrapperStyles};
`

const IconWrapper = styled.div`
  ${IconWrapperStyles};
`
const TimelineContent = ({ year, content }) => {
  return (
    <TimelineContentWrapper>
      <Card>
        <Heading element="h2">{year}</Heading>
        <RichText content={content}></RichText>
      </Card>
    </TimelineContentWrapper>
  )
}

const TimelineContentWrapper = styled.div`
${TimelineContentWrapperStyles}`
export default Timeline
