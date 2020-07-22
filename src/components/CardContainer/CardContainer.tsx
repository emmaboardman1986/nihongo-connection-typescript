import React from "react"
import { StyledCardContainer } from "./CardContainerStyles"
import ClassCard from "../ClassCard"
import ReviewCard from "../ReviewCard"

export interface CardContainerProps {
  cardType: "class" | "review"
  cardContent: []
  noHorizontalScroll?: boolean
  // do not truncate review content with ellipsis
  displayFull?: boolean
}
const CardContainer = ({
  cardType,
  cardContent,
  noHorizontalScroll,
  displayFull,
}: CardContainerProps) => {
  return (
    <StyledCardContainer
      noHorizontalScroll={noHorizontalScroll}
      displayFull={displayFull}
    >
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
                  type={classData.class_type}
                  thumbnailURL={
                    classData.class_main_image.thumbnails.thumbnail.url
                  }
                  preview={classData.class_1_bullet_preview.text}
                ></ClassCard>
              </li>
            )
          })
        ) : (
          <li key="0">
            <ClassCard
              uid={cardContent[0].node.uid}
              title={cardContent[0].node.data.class_title.text}
              duration={cardContent[0].node.data.class_duration}
              location={cardContent[0].node.data.class_location}
              type={cardContent[0].node.data.class_type}
              thumbnailURL={
                cardContent[0].node.data.class_main_image.thumbnails.thumbnail
                  .url
              }
              preview={cardContent[0].node.data.class_1_bullet_preview.text}
            ></ClassCard>
          </li>
        )
      ) : cardType === "review" ? (
        cardContent.length > 1 ? (
          cardContent.map((review, index) => (
            <li key={index}>
              <ReviewCard
                displayFull={displayFull}
                key={review.id}
                content={review.review_content[0].text}
                date={review.review_date}
                name={
                  review.reviewer_name.length > 0
                    ? review.reviewer_name[0].text
                    : null
                }
              ></ReviewCard>
            </li>
          ))
        ) : (
          <li key={cardContent[0].id}>
            <ReviewCard
              displayFull={displayFull}
              content={cardContent[0].review_content[0].text}
              date={cardContent[0].review_date}
              name={
                cardContent[0].reviewer_name.length > 0
                  ? cardContent[0].reviewer_name[0].text
                  : null
              }
            ></ReviewCard>
          </li>
        )
      ) : null}
    </StyledCardContainer>
  )
}

export default CardContainer
