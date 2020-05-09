import React, { useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ClassCardStyles, ClassCardWrapperStyles, ClassCardImageStyles, ClassCardLabelStyles, ClassCardTextStyles } from "./ClassCardStyles"
import Heading from "../../typography/Heading"
import FlexContainer from "../../utilities/FlexContainer"
import { setFlex, setFlexDirection } from "../../../styles/styleHelpers"

const ClassCard = () => {
  const ref = useRef()
  const handleCardClick = e => {
    if (ref !== e.target) {
      ref.current.click()
    }
  }
  return (
    <ClassCardWrapper onClick={handleCardClick}>
      <ClassCardImage>
        <ClassCardLabel><small>Class Location</small></ClassCardLabel>
        <img
          src="https://i.ibb.co/FhWkjPM/case-study-js-experience.png"
          alt=""
        ></img>
      </ClassCardImage>
      <ClassCardText>
        <Heading element="h3">
          <Link to="#" ref={ref}>
            Class Title
          </Link>
        </Heading>
        <p>Class Duration</p>
        <p>Class Schedule</p>
        <p>Class Start Date</p>
      </ClassCardText>
    </ClassCardWrapper>
  )
}

const ClassCardWrapper = styled.div`
  ${ClassCardStyles};
  ${ClassCardWrapperStyles};
`

const ClassCardImage = styled.div`
${ClassCardImageStyles};`

const ClassCardLabel = styled.span`
${ClassCardLabelStyles};
padding: 0.25rem;
`

const ClassCardText = styled.div`
 ${ClassCardTextStyles};
`

export default ClassCard
