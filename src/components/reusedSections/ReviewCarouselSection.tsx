import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardContainer from "../cards/CardContainer"
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
  return (
    <Section>
      <Heading element="h2">
        {data.allPrismicGeneralReviews.edges[0].node.data.page_title[0].text}
      </Heading>
      <VerticalSpacing size={{ _: "xTight" }} />
      <CardContainer
        cardContent={featuredReviews}
        cardType="review"
      ></CardContainer>

      <VerticalSpacing size={{ _: "loose" }} />
      <Button link="/reviews" variant="secondary">
        See all reviews
      </Button>
      <VerticalSpacing size={{_: "loose", sm: "xLoose"}} />
    </Section>
  )
}

export default ReviewCarouselSection
