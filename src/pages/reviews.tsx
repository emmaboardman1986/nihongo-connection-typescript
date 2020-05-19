import React, { useState, useContext, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import Section from "../components/Section"
import BodyText from "../components/typography/BodyText"
import CardContainer from "../components/cards/CardContainer"

import VerticalSpacing from "../components/utilities/VerticalSpacing"

interface Props {
  readonly data: ReviewPageQueryData
}

const ReviewsPage: React.FC<Props> = ({ data }) => {
  const allReviews = data.allPrismicGeneralReviews.edges[0].node.data.general_reviews;
  const reviewPageCopy = data.allPrismicGeneralReviews.edges[0].node.data

  return (
    <Layout>
      <Section>
        <Heading element="h1">
          Reviews
          {/* {reviewPageCopy.explore_page_title.text} */}
        </Heading>
        <BodyText>
          Don't just take our word for it, see what our community members have
          to say!
        </BodyText>

        <VerticalSpacing size="large"></VerticalSpacing>
        <CardContainer
          cardType="review"
          cardContent={allReviews}
          noHorizontalScroll
        ></CardContainer>
      </Section>
    </Layout>
  )
}

interface ReviewPageQueryData {
  data: {
    allPrismicGeneralReviews: {
      edges: {
        node: {
          id: string
          data: {
            page_title: {
              text: string
            }
            general_reviews: {
              review_content: {
                text: string
              }
              review_date(formatString: "MMMM DD, YYYY")
              reviewer_name: {
                text: string
              }
            }
          }
        }
      }
    }
  }
}

export const explorePageQuery = graphql`
  query ReviewPageQueryData {
    allPrismicGeneralReviews {
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
`

export default ReviewsPage
