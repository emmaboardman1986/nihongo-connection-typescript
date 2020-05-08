import React from "react"
import { graphql } from "gatsby"
import RichText from "../components/RichText"

interface Props {
  readonly data: PageQueryData
}

const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <RichText
      element="section"
      content={data.prismicHomepa.data.homepage_5th_section_content.html}
    ></RichText>
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
