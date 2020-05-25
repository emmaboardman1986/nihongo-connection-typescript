import React, { useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  ClassCardStyles,
  ClassCardWrapperStyles,
  ClassCardImageStyles,
  ClassCardLabelStyles,
  ClassCardTextStyles,
  GradientStyles,
  ClassCardInnerStyles,
} from "./ClassCardStyles"
import Heading from "../../typography/Heading"
import FlexContainer from "../../utilities/FlexContainer"

export interface ReviewCardProps {
  location: string
  thumbnailURL?: string
  thumbnailAlt?: string
  duration: string
  title: string
  schedule: string
  start_date?: string
  uid: string
}

const ClassCard = ({
  location,
  thumbnailURL,
  thumbnailAlt = "",
  duration,
  title,
  schedule,
  start_date,
  uid,
  type,
}) => {
  const ref = useRef()
  const handleCardClick = e => {
    if (ref !== e.target) {
      ref.current.click()
    }
  }
  console.log(title, type)

  return (
    <ClassCardWrapper onClick={handleCardClick}>
      <Gradient>
        <ClassCardInner>
          <ClassCardImage>
            <ClassCardLabel>
              <small>{location}</small>
            </ClassCardLabel>
            <img src={thumbnailURL} alt={thumbnailAlt}></img>
          </ClassCardImage>
          <ClassCardText>
            <Heading element="h3">
              <Link to={`/${uid}`} ref={ref}>
                {title}
              </Link>
            </Heading>
            <FlexContainer
              flexDirection={{ _: "column" }}
              justifyContent={{ _: "flex-end" }}
            >
              <p>
                {duration}
              </p>

              <p>
               
                  <strong>
                    {start_date != null && type === "Membership"
                      ? `Next enrollment: ${start_date}`
                      : start_date != null
                      ? `Next course: ${start_date}`
                      : uid === "friday-conversation-club"
                      ? "This Friday!"
                      : "Applications currently open"}
                  </strong>
                
              </p>
            </FlexContainer>
          </ClassCardText>
        </ClassCardInner>
      </Gradient>
    </ClassCardWrapper>
  )
}

const ClassCardInner = styled.div`
  ${ClassCardInnerStyles};
`

const Gradient = styled.div`
  ${GradientStyles};
`

const ClassCardWrapper = styled.div`
  ${ClassCardStyles};
  ${ClassCardWrapperStyles};
`

const ClassCardImage = styled.div`
  ${ClassCardImageStyles};
`

const ClassCardLabel = styled.span`
  ${ClassCardLabelStyles};
`

const ClassCardText = styled.div`
  ${ClassCardTextStyles};
`

export default ClassCard
