import React from "react"
import styled from "styled-components"
import { CardContainerStyles } from "./CardContainerStyles"
import ClassCard from "../ClassCard"
import ReviewCard from "../ReviewCard"

const CardContainer = ({ cardType, cardContent, noHorizontalScroll }) => {
  return (
    <CardContainerWrapper noHorizontalScroll={noHorizontalScroll}>
      {/* CLASS CARDS */}
      {cardType && cardType === "class" ? (
        cardContent.length > 1 ? (
          cardContent.map((classItem, index) => {
            let classData = classItem.node.data
            return (
              <li key={index}>
                <ClassCard
                  uid={classItem.node.uid}
                  title={classData.class_title.text}
                  duration={classData.class_duration}
                  location={classData.class_location}
                  schedule={classData.class_schedule}
                  thumbnailURL={
                    classData.class_main_image.thumbnails.thumbnail.url
                  }
                  thumbnailAlt={
                    classData.class_main_image.thumbnails.thumbnail.alt
                  }
                  start_date={
                    classData.class_dates.length > 0 && classData.class_dates[0] != null
                      ? classData.class_dates[0].class_date
                      : null
                  }
                ></ClassCard>
              </li>
            )
          })
        ) : (
          <li key="0">
            <ClassCard
              title={cardContent[0].node.data.class_title.text}
              duration={cardContent[0].node.data.class_duration}
              location={cardContent[0].node.data.class_location}
              schedule={cardContent[0].node.data.class_schedule}
              thumbnailURL={
                cardContent[0].node.data.class_main_image.thumbnails.thumbnail
                  .url
              }
              thumbnailAlt={
                cardContent[0].node.data.class_main_image.thumbnails.thumbnail
                  .alt
              }
              start_date={
                cardContent[0].node.data.class_dates.length > 0
                  ? cardContent[0].node.data.class_dates[0].class_date
                  : "this Friday!"
              }
            ></ClassCard>
          </li>
        )
      ) : cardType === "review" ? (
        cardContent.length > 1 ? (
          cardContent.map((review, index) => (
            <li key={index}>
              <ReviewCard
                key={review.id}
                content={review.review_content[0].text}
                date={review.review_date}
                name={
                  review.reviewer_name.length > 0
                    ? review.reviewer_name[0].text
                    : null
                }
                id={review.id}
              ></ReviewCard>
            </li>
          ))
        ) : (
          <li key={cardContent[0].id}>
            <ReviewCard
              content={cardContent[0].review_content[0].text}
              date={cardContent[0].review_date}
              name={
                cardContent[0].reviewer_name.length > 0
                  ? cardContent[0].reviewer_name[0].text
                  : null
              }
              id={cardContent[0].id}
            ></ReviewCard>
          </li>
        )
      ) : null}
    </CardContainerWrapper>
  )
}

const CardContainerWrapper = styled.ul`
  ${CardContainerStyles};
`

export default CardContainer
