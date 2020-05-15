import React from "react"
import styled from "styled-components"
import { CardContainerStyles } from "./CardContainerStyles"
import ClassCard from "../ClassCard"
import ReviewCard from "../ReviewCard"

const CardContainer = ({ cardType, cardContent, noHorizontalScroll }) => {
  const generateClassCards = cardContent => {
    cardContent.length > 1 ? (
      cardContent.map((classItem, index) => {
        let classData = classItem.node.data
        return (
          <li key={index}>
            <p>CARD</p>
            <ClassCard
              title={classData.class_title.text}
              duration={classData.class_duration}
              location={classData.class_location[0].class_location_option}
              schedule={classData.class_schedule}
              thumbnailURL={classData.class_main_image.thumbnails.thumbnail.url}
              thumbnailAlt={classData.class_main_image.thumbnails.thumbnail.alt}
              start_date={
                classData.class_dates.length > 0
                  ? classData.class_dates[0].class_date
                  : "this Friday!"
              }
            ></ClassCard>
          </li>
        )
      })
    ) : (
      <li>
        {/* <ClassCard
          key={index}
          title={classData.class_title.text}
          duration={classData.class_duration}
          location={classData.class_location[0].class_location_option}
          schedule={classData.class_schedule}
          thumbnailURL={
            classData.class_main_image.thumbnails.thumbnail.url
          }
          thumbnailAlt={
            classData.class_main_image.thumbnails.thumbnail.alt
          }
          start_date={
            classData.class_dates.length > 0
              ? classData.class_dates[0].class_date
              : "this Friday!"
          }
        ></ClassCard> */}
      </li>
    )
  }

  const generateReviewCards = cardContent => {
    console.log("review")
  }

  return (
    <CardContainerWrapper noHorizontalScroll={noHorizontalScroll}>
      {cardType && cardType === "class" && cardContent.length > 1 ? (
        cardContent.map((classItem, index) => {
          let classData = classItem.node.data
          return (
            <li key={index}>
              <ClassCard
                title={classData.class_title.text}
                duration={classData.class_duration}
                location={classData.class_location[0].class_location_option}
                schedule={classData.class_schedule}
                thumbnailURL={
                  classData.class_main_image.thumbnails.thumbnail.url
                }
                thumbnailAlt={
                  classData.class_main_image.thumbnails.thumbnail.alt
                }
                start_date={
                  classData.class_dates.length > 0
                    ? classData.class_dates[0].class_date
                    : "this Friday!"
                }
              ></ClassCard>
            </li>
          )
        })
      ) : (
        <li>CARD</li>
      )}
    </CardContainerWrapper>
  )
}

const CardContainerWrapper = styled.ul`
  ${CardContainerStyles};
`

export default CardContainer
