import React, { useRef } from "react"
import { Link } from "gatsby"
import {
  StyledClassCard, StyledClassCardImage, StyledClassCardInner, StyledClassCardLabel, StyledClassCardText, StyledGradient
} from "./ClassCardStyles"
import Heading from "../typography/Heading"
import FlexContainer from "../utilities/FlexContainer"

export interface ClassCardProps {
  location: "Online" | "In Edinburgh"
  thumbnailURL?: string
  duration: "6-week course" | "8-week course" | "Intensive weekend" | "50-minute sessions" | "Weekly drop-in sessions"
  title: string
  start_date?: string
  uid: string
  type: string
}

const ClassCard = ({
  location,
  thumbnailURL,
  duration,
  title,
  start_date,
  uid,
  type,
}:ClassCardProps) => {
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
              <small>{location}</small>
            </StyledClassCardLabel>
            <img src={thumbnailURL} alt=""></img>
          </StyledClassCardImage>
          <StyledClassCardText>
            <Heading element="h3">
              <Link to={`/${uid}`} ref={ref}>
                {title}
              </Link>
            </Heading>
            <FlexContainer
              flexDirection={{ _: "column" }}
              justifyContent={{ _: "flex-end" }}
            >
              <p>{duration}</p>

              <p>
                <strong>
                  {start_date != null && type === "Membership"
                    ? `Next enrollment: ${start_date}`
                    : start_date != null
                    ? `Next course: ${start_date}`
                    : uid === "friday-conversation-club"
                    ? "This Friday!"
                    : uid === "one-to-one-lessons"
                    ? "Limited Availability"
                    : "Applications currently open"}
                </strong>
              </p>
            </FlexContainer>
          </StyledClassCardText>
        </StyledClassCardInner>
      </StyledGradient>
    </StyledClassCard>
  )
}



export default ClassCard
