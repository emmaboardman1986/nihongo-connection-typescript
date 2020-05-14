import React, { useState, useContext, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Heading from "../components/typography/Heading"
import Section from "../components/Section"
import ClassCard from "../components/cards/ClassCard"
import CardContainer from "../components/cards/CardContainer"
import ReviewCarouselSection from "../components/reusedSections/ReviewCarouselSection"
import RichText from "../components/RichText"
import Filter from "../components/Filter"
import VerticalSpacing from "../components/utilities/VerticalSpacing"

import { FilterContext } from "../context/FilterContext"

interface Props {
  readonly data: ExplorePageQueryData
}

const ExplorePage: React.FC<Props> = ({ data }) => {
  const allClasses = data.allPrismicClass.edges
  const [classes, setClasses] = useState([])

  const explorePageCopy = data.allPrismicExplorePage.edges[0].node.data

  const { state, dispatch } = useContext(FilterContext)

  useEffect(() => {
    const {
      showStudent,
      showTeacher,
      showOnline,
      showInEdinburgh,
      showRegular,
      showIntensive,
      showDropIn,
    } = state
    let result
    let resultStudent = []
    let resultTeacher = []
    let resultOnline = []
    let resultEdinburgh = []
    let resultIntensive = []
    let resultRegular = []
    let resultDropIn = []
    if (showStudent) {
      resultStudent = allClasses.filter(
        classItem => classItem.node.data.class_target === "Student"
      )
    }
    if (showTeacher) {
      resultStudent = allClasses.filter(
        classItem => classItem.node.data.class_target === "Teacher"
      )
    }
    if (showOnline) {
      resultOnline = allClasses.filter(
        classItem =>
          classItem.node.data.class_location[0].class_location_option ===
          "Online"
      )
    }
    if (showInEdinburgh) {
      resultEdinburgh = allClasses.filter(
        classItem =>
          classItem.node.data.class_location[0].class_location_option ===
          "In Edinburgh"
      )
    }
    if (showIntensive) {
      resultStudent = allClasses.filter(
        classItem => classItem.node.data.class_learning_style === "Intensive"
      )
    }
    if (showRegular) {
      resultStudent = allClasses.filter(
        classItem => classItem.node.data.class_learning_style === "Regular"
      )
    }
    if (showDropIn) {
      resultStudent = allClasses.filter(
        classItem => classItem.node.data.class_learning_style === "Drop-in"
      )
    }

    result = [...resultStudent, ...resultTeacher, ...resultOnline, ...resultEdinburgh, ...resultStudent, ...resultIntensive, ...resultRegular, ...resultDropIn]

    setClasses(result)
  }, [state])

  console.log("classes", classes)

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
        <Filter></Filter>
        <CardContainer noHorizontalScroll>
          {classes &&
            classes.length > 0 &&
            classes.map((classItem, index) => {
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
        <span id="all-courses"></span>
        <Heading element="h2">
          {explorePageCopy.explore_page_all_classes_title.text}
        </Heading>
        <CardContainer noHorizontalScroll>
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
        </CardContainer>
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
            class_learning_style: string
            class_target: string
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
            class_learning_style
            class_target
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
