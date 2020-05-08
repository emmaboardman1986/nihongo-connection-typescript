import React from "react"
import { graphql } from "gatsby"
import RichText from "../components/RichText"
import Heading from "../components/typography/Heading"
import BodyText from "../components/typography/BodyText"

interface Props {
  readonly data: PageQueryData
}

const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Heading element="h1" text="Hi"></Heading>
      <BodyText>HEY THERE</BodyText>
      <RichText
        element="section"
        content={data.prismicHomepa.data.homepage_5th_section_content.html}
      ></RichText>
    </>
  )
}

interface PageQueryData {
  data: {
    prismicHomepa: {
      data: {
        homepage_5th_section_content: {
          text: string
          html: string
        }
      }
    }
  }
}

export const pageQuery = graphql`
  query PageQuery {
    prismicHomepa {
      data {
        homepage_5th_section_content {
          text
          html
        }
      }
    }
  }
`

export default HomePage
