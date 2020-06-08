import React from "react"
import { setColor } from "../../styles/styleHelpers"
import {
  StyledTimeline,
  StyledTimelineContainer,
  StyledTimelineBlock,
  StyledTimelineImage,
  StyledIcon,
  StyledTimelineContent,
} from "./TimelineStyles"
import Icon from "../Icon"
import RichText from "../RichText"
import Card from "../Card"
import Heading from "../typography/Heading"

type TimelineContentObject = {
  about_us_timeline_content: {
    html: string
  }
  about_us_timeline_year: {
    text: string
  }
}

export interface TimelineProps {
  timelineContent: [TimelineContentObject]
}

// TODO: address property key
const Timeline = ({ timelineContent = [] }: TimelineProps) => {
  return (
    <StyledTimeline>
      <StyledTimelineContainer>
        {timelineContent.map((contentBlock, index) => {
          return (
            <TimelineBlock
              year={contentBlock.about_us_timeline_year.text}
              content={contentBlock.about_us_timeline_content.html}
              key={index}
            />
          )
        })}
      </StyledTimelineContainer>
    </StyledTimeline>
  )
}

export interface TimelineBlockProps {
  year: string
  content: string
}

const TimelineBlock = ({ year, content }) => {
  return (
    <StyledTimelineBlock>
      <TimelineImage icon="star"></TimelineImage>
      <TimelineContent year={year} content={content}></TimelineContent>
    </StyledTimelineBlock>
  )
}

export interface TimelineImageProps {
  icon: string
}

const TimelineImage = ({ icon }) => {
  return (
    <StyledTimelineImage className="timeline__img">
      <StyledIcon>
        <Icon
          icon={icon}
          color={setColor.brandMonochrome[0]}
          fill={setColor.brandMonochrome[0]}
          stroke={setColor.brandMonochrome[0]}
        />
      </StyledIcon>
    </StyledTimelineImage>
  )
}

export interface TimelineContentProps {
  year: string
  content: string
}

const TimelineContent = ({ year, content }) => {
  return (
    <StyledTimelineContent>
      <Card>
        <Heading element="h2">{year}</Heading>
        <RichText content={content}></RichText>
      </Card>
    </StyledTimelineContent>
  )
}

export default Timeline
