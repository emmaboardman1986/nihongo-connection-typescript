import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RichText from "../components/RichText"
import Heading from "../components/typography/Heading"
import Section from "../components/Section"
import Button from "../components/Button"
import ClassCard from "../components/cards/ClassCard"
import ReviewCard from "../components/cards/ReviewCards"
import CardContainer from "../components/cards/CardContainer"

interface Props {
  readonly data: PageQueryData
}

const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Section>
        <Heading element="h1">
          {data.prismicHomepa.data.homepage_title.text}
        </Heading>
        <RichText
          element="div"
          content={data.prismicHomepa.data.homepage_summary.html}
        ></RichText>
        {/* TODO Vertical Spacing component */}
        <Button
          link="/explore"
          name={data.prismicHomepa.data.homepage_cta_button_text.text}
        ></Button>
      </Section>
      <Section>
        <Heading element="h2">
          {data.prismicHomepa.data.homepage_1st_section_title.text}
        </Heading>
        <CardContainer>
          <ClassCard></ClassCard>
          <ClassCard></ClassCard>
          <ClassCard></ClassCard>
        </CardContainer>
      </Section>
      <Section>
        <Heading element="h2">
          {data.prismicHomepa.data.homepage_2nd_section_title.text}
        </Heading>
        <CardContainer>
        <ReviewCard>Fabulous</ReviewCard>
        <ReviewCard>Great</ReviewCard>
        <ReviewCard>Astounding</ReviewCard>
       
        </CardContainer>
      </Section>
      <Section>
        <Heading element="h2">
          {data.prismicHomepa.data.homepage_3rd_section_title.text}
        </Heading>
        <RichText
          element="div"
          content={data.prismicHomepa.data.homepage_3rd_section_content.html}
        ></RichText>
      </Section>
      <Section>
        <Heading element="h2">
          {data.prismicHomepa.data.homepage_4th_section_title.text}
        </Heading>
        <RichText
          element="div"
          content={data.prismicHomepa.data.homepage_4th_section_content.html}
        ></RichText>
      </Section>
      <Section>
        <Heading element="h2">
          {data.prismicHomepa.data.homepage_5th_section_title.text}
        </Heading>
        <RichText
          element="div"
          content={data.prismicHomepa.data.homepage_5th_section_content.html}
        ></RichText>
      </Section>
    </Layout>
  )
}

interface PageQueryData {
  data: {
    prismicHomepa: {
      data: {
        homepage_1st_section_title: {
          text: string
        }
        homepage_2nd_section_title: {
          text: string
        }
        homepage_3rd_section_content: {
          html: string
        }
        homepage_3rd_section_title: {
          text: string
        }
        homepage_4th_section_content: {
          html: string
        }
        homepage_4th_section_title: {
          text: string
        }
        homepage_5th_section_content: {
          html: string
        }
        homepage_5th_section_title: {
          text: string
        }
        homepage_cta_button_text: {
          text: string
        }
        homepage_summary: {
          html: string
        }
        homepage_title: {
          text: string
        }
      }
    }
  }
}

export const pageQuery = graphql`
  query PageQuery {
    prismicHomepa {
      data {
        homepage_1st_section_title {
          text
        }
        homepage_2nd_section_title {
          text
        }
        homepage_3rd_section_content {
          html
        }
        homepage_3rd_section_title {
          text
        }
        homepage_4th_section_content {
          html
        }
        homepage_4th_section_title {
          text
        }
        homepage_5th_section_content {
          html
        }
        homepage_5th_section_title {
          text
        }
        homepage_cta_button_text {
          text
        }
        homepage_summary {
          html
        }
        homepage_title {
          text
        }
      }
    }
  }
`

export default HomePage
