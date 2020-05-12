import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardContainer from "../cards/CardContainer"
import ReviewCard from "../cards/ReviewCard"
import Section from "../Section"
import Button from "../Button"
import VerticalSpacing from "../utilities/VerticalSpacing"
import Heading from "../typography/Heading"

const ReviewCarouselSection = () => {
  const data = useStaticQuery(graphql`
    query ReviewQueryData {
      allPrismicGeneralReviews(
        filter: {
          data: { general_reviews: { elemMatch: { featured: { eq: true } } } }
        }
      ) {
        edges {
          node {
            id
            data {
              page_title {
                text
              }
              general_reviews {
                review_content {
                  text
                }
                review_date(formatString: "MMMM DD, YYYY")
                reviewer_name {
                  text
                }
              }
            }
          }
        }
      }
    }
  `)

  const featuredReviews =
    data.allPrismicGeneralReviews.edges[0].node.data.general_reviews

    console.log(data);

    return (
    <Section>
      <Heading element="h2">
        {data.allPrismicGeneralReviews.edges[0].node.data.page_title[0].text}
      </Heading>
      <CardContainer>
        {featuredReviews.map((review, index) => (
          <ReviewCard
            content={review.review_content[0].text}
            key={index}
            date={review.review_date}
            name={
              review.reviewer_name.length > 0
                ? review.reviewer_name[0].text
                : null
            }
            id={review.id}
          ></ReviewCard>
        ))}
      </CardContainer>

      <VerticalSpacing size="x-large" />
      <Button
        link="/reviews"
        name="See all Reviews"
        variant="secondary"
      ></Button>
    </Section>
  )
}

export default ReviewCarouselSection
