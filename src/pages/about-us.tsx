import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import Section from "../components/Section"
import BodyText from "../components/BodyText"
import Timeline from "../components/Timeline"

import VerticalSpacing from "../components/VerticalSpacing"

interface Props {
  readonly data: AboutPageQueryData
}

const AboutPage: React.FC<Props> = ({ data }) => {
    const aboutPageData = data.allPrismicAboutUs.nodes[0].data;
    const timelineContent = aboutPageData.about_us_timeline;


  return (
    <Layout>
      <Section>
        <Heading element="h1">
          {aboutPageData.about_us_title.text}
        </Heading>
        <BodyText>
        {aboutPageData.about_us_intro.text}
        </BodyText>

        <VerticalSpacing size={{ _: "loose" }}></VerticalSpacing>
        <Timeline timelineContent={timelineContent}></Timeline>
      </Section>
    </Layout>
  )
}

interface AboutPageQueryData {
    allPrismicAboutUs: {
        nodes: {
          data: {
            about_us_intro: {
              text: string
            }
            about_us_timeline: {
              about_us_timeline_content: {
                html: string
              }
              about_us_timeline_year: {
                text: string
              }
            }
            about_us_title: {
              text: string
            }
          }
        }
      }
}

export const aboutPageQuery = graphql`
  query AboutPageQueryData {
    allPrismicAboutUs {
      nodes {
        data {
          about_us_intro {
            text
          }
          about_us_timeline {
            about_us_timeline_content {
              html
            }
            about_us_timeline_year {
              text
            }
          }
          about_us_title {
            text
          }
        }
      }
    }
  }
`

export default AboutPage
