import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import Section from "../components/Section"
import ClassCard from "../components/cards/ClassCard"
import CardContainer from "../components/cards/CardContainer"
import FlexContainer from "../components/utilities/FlexContainer"
import ReviewCarouselSection from "../components/reusedSections/ReviewCarouselSection"
import RichText from "../components/RichText"
import Button from "../components/Button"

interface Props {
  readonly data: ExplorePageQueryData
}

const ExplorePage: React.FC<Props> = ({ data }) => {
  const [filteredResults, setFilteredResults] = useState([])
  const allClasses = data.allPrismicClass.edges
  const explorePageCopy = data.allPrismicExplorePage.edges[0].node.data

  console.log("all classes", allClasses)

  const handleFilterClick = () => {
    const result = allClasses.filter(
      classItem =>
        classItem.node.data.class_location[0].class_location_option === "Online"
    )
    setFilteredResults(result)
  }
  return (
    <Layout>
      <Section>
        <Heading element="h1">
          {explorePageCopy.explore_page_title.text}
        </Heading>
        <RichText
          content={explorePageCopy.explore_page_introduction.html}
        ></RichText>
      </Section>
      <Section>
        <Heading element="h2">Filter Classes</Heading>
        <h3 onClick={handleFilterClick}>filter</h3>
        <CardContainer>
          {filteredResults && filteredResults.length > 0
            ? filteredResults.map((classItem, index) => {
                let classData = classItem.node.data
                return (
                  <ClassCard
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
                  ></ClassCard>
                )
              })
            : allClasses.map((classItem, index) => {
                let classData = classItem.node.data
                return (
                  <ClassCard
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
                  ></ClassCard>
                )
              })}
        </CardContainer>
      </Section>
      <Section>
        <Heading element="h2">
          {explorePageCopy.explore_page_all_classes_title.text}
        </Heading>
        <FlexContainer>
          {allClasses.map((classItem, index) => {
            let classData = classItem.node.data
            return (
              <ClassCard
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
              ></ClassCard>
            )
          })}
        </FlexContainer>
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
    allPrismicExplorePage: {
      edges: {
        node: {
          data: {
            explore_page_all_classes_title: {
              text: string
            }
            explore_page_introduction: {
              html: string
            }
            explore_page_title: {
              text: string
            }
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
    allPrismicExplorePage {
      edges {
        node {
          data {
            explore_page_all_classes_title {
              text
            }
            explore_page_introduction {
              html
            }
            explore_page_title {
              text
            }
          }
        }
      }
    }
    allPrismicExplorePage {
      edges {
        node {
          data {
            explore_page_all_classes_title {
              text
            }
            explore_page_introduction {
              html
            }
            explore_page_title {
              text
            }
          }
        }
      }
    }
  }
`

export default ExplorePage
