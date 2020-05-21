import React, { useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  ClassCardStyles,
  ClassCardWrapperStyles,
  ClassCardImageStyles,
  ClassCardLabelStyles,
  ClassCardTextStyles,
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
}) => {
  const ref = useRef()
  const handleCardClick = e => {
    if (ref !== e.target) {
      ref.current.click()
    }
  }

  console.log(uid, start_date)
  const generateDate = (uid: string) => {
    let nextDate
    if (uid === "jlpt-bootcamp") {
      nextDate = "Postponed"
    } else if (uid === "friday-study-club") {
      nextDate = "this Friday!"
    } else if (uid === "nihongo-confidence-lite") {
      nextDate = "this Monday"
      // write method to find nearest Mon, Thurs, Fri
    } else {
      nextDate = "announced soon!"
    }
    return nextDate
  }
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
              element="ul"
              flexDirection={{ _: "column" }}
              justifyContent={{ _: "flex-end" }}
            >
              <li>
                <small>{duration}</small>
              </li>
              {/* <li>
                <small>{schedule}</small>
              </li> */}
              <li>
                <small>
                  <strong>
                    Next class:{" "}
                    {start_date != null ? start_date : generateDate(uid)}
                  </strong>
                </small>
              </li>
            </FlexContainer>
          </ClassCardText>
        </ClassCardInner>
      </Gradient>
    </ClassCardWrapper>
  )
}

const ClassCardInner = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 100%;
  border: 2px solid black;
  box-sizing: border-box;
`

const Gradient = styled.div`
height: 100%;
  box-sizing: border-box;
  padding: 0.25rem;
  background: linear-gradient(
    to right,
    #434599,
    cyan,
    green,
    yellow,
    orange,
    #ed2530
  );
  border-radius: 8px;
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
