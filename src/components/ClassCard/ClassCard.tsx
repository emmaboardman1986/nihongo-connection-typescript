import React, { useRef } from "react"
import { Link } from "gatsby"
import {
  StyledClassCard,
  StyledClassCardImage,
  StyledClassCardLabel,
  StyledClassCardText,
  StyledClassCardInner,
  StyledGradient
} from "./ClassCardStyles"
import Heading from "../Heading"
import HighlightPill from "../HighlightPill"
import VerticalSpacing from "../VerticalSpacing"
import Emphasis from "../Emphasis"
import { setColor } from "../../styles/styleHelpers"

export interface ClassCardProps {
  location: "Online" | "In Edinburgh"
  thumbnailURL?: string
  duration:
    | "6-week course"
    | "8-week course"
    | "Intensive weekend"
    | "50-minute sessions"
    | "Weekly drop-in sessions"
  title: string
  start_date?: string
  uid: string
  type: string
  preview: string
}

const ClassCard = ({
  location,
  thumbnailURL,
  duration,
  title,
  uid,
  type,
  preview,
}: ClassCardProps) => {
  const ref = useRef()
  const handleCardClick = e => {
    // prevent event firing twice if link is clicked
    if (ref !== e.target) {
      ref.current.click()
    }
  }

  return (
    <StyledClassCard onClick={handleCardClick}>
      <StyledGradient>
        <StyledClassCardInner>
      <StyledClassCardImage>
        <StyledClassCardLabel>
          <strong>{location}</strong>
        </StyledClassCardLabel>
        <img src={thumbnailURL} alt=""></img>
      </StyledClassCardImage>
      <StyledClassCardText>
        <Heading element="h3">
          <Link to={`/${uid}`} ref={ref}>
            {title}
          </Link>
        </Heading>
        <HighlightPill bgColor={setColor.brandSecondary[500]} color={setColor.brandSecondary[100]}>
          <strong>{duration}</strong>
        </HighlightPill>
        <VerticalSpacing></VerticalSpacing>
        {preview != null && (
          <Emphasis bgColor="primary-light" reducedPadding>
            <p>{preview}</p>
          </Emphasis>
        )}
        <VerticalSpacing></VerticalSpacing>
      </StyledClassCardText>
      </StyledClassCardInner>
      </StyledGradient>
    </StyledClassCard>
  )
}

export default ClassCard
