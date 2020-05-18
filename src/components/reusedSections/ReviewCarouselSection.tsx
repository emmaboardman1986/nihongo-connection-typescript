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
      <CardContainer cardContent={featuredReviews} cardType="review">
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
