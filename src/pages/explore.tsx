import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import Section from "../components/Section"
import ClassCard from "../components/cards/ClassCard"
import ReviewCarouselSection from "../components/reusedSections/ReviewCarouselSection"
import RichText from "../components/RichText"

interface Props {
  readonly data: ExplorePageQueryData
}

const ExplorePage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Section>
        <Heading element="h1">Explore our classes</Heading>
        <RichText content="Use the filters below to find your class, or <Link to='#all-courses'>jump to all courses</Link>"></RichText>
      </Section>

      <ReviewCarouselSection></ReviewCarouselSection>
    </Layout>
  )
}

interface ExplorePageQueryData {
  data: {
    allPrismicClass: {
      edges: {
        node: {
          id: string
          data: {
            class_title: {
              text: string
            }
            class_main_image: {
              thumbnails: {
                thumbnail: {
                  url: string
                  alt: string
                }
              }
            }
            class_duration: string
            class_location: {
              class_location_option: string
            }
            class_dates: {
              class_date(locale: "en-GB"): string
            }
            class_schedule: string
          }
        }
      }
    }
  }
}

export const explorePageQuery = graphql`
  query ExplorePageQuery {
    allPrismicClass {
      edges {
        node {
          id
          data {
            class_title {
              text
            }
            class_main_image {
              thumbnails {
                thumbnail {
                  url
                  alt
                }
              }
            }
            class_duration
            class_location {
              class_location_option
            }
            class_dates {
              class_date(locale: "en-GB")
            }
            class_schedule
          }
        }
      }
    }
  }
`

export default ExplorePage
