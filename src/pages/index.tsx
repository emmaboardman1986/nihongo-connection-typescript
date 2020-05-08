import React from "react"
import { graphql } from "gatsby"
import RichText from "../components/RichText"
import Heading from "../components/typography/Heading"
import Section from "../components/Section"
import Button from "../components/Button"

interface Props {
  readonly data: PageQueryData
}

const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Section>
        <Heading element="h1" text={data.prismicHomepa.data.homepage_title.text}></Heading>
        <RichText
          element="div"
          content={data.prismicHomepa.data.homepage_summary.html}
        ></RichText>
        {/* TODO Vertical Spacing component */}
        <Button link="/explore" name={data.prismicHomepa.data.homepage_cta_button_text.text}></Button>
      </Section>
      <Section>
        <Heading element="h2" text={data.prismicHomepa.data.homepage_1st_section_title.text}></Heading>
        <p>Class Cards</p>
      </Section>
    </>
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
          text: string
        }
        homepage_3rd_section_title: {
          text: string
        }
        homepage_4th_section_content: {
          text: string
        }
        homepage_4th_section_title: {
          text: string
        }
        homepage_5th_section_content: {
          text: string
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
          text
        }
        homepage_3rd_section_title {
          text
        }
        homepage_4th_section_content {
          text
        }
        homepage_4th_section_title {
          text
        }
        homepage_5th_section_content {
          text
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
