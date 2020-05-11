import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RichText from "../components/RichText"
import Heading from "../components/typography/Heading"
import Section from "../components/Section"
import Button from "../components/Button"
import ClassCard from "../components/cards/ClassCard"
import ReviewCard from "../components/cards/ReviewCard"
import CardContainer from "../components/cards/CardContainer"

import VerticalSpacing from "../components/utilities/VerticalSpacing"

interface Props {
  readonly data: PageQueryData
}

const HomePage: React.FC<Props> = ({ data }) => {
  const featuredReviews =
    data.allPrismicGeneralReviews.edges[0].node.data.general_reviews

  console.log(featuredReviews)
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
        <VerticalSpacing size="large" />
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
        <VerticalSpacing size="large" />
        <Button
          link="/explore"
          name="See all Classes"
          variant="secondary"
        ></Button>
      
      </Section>
      <Section>
        <Heading element="h2">
          {data.prismicHomepa.data.homepage_2nd_section_title.text}
        </Heading>
        <CardContainer>
          {featuredReviews.map((review, index) => (
            <ReviewCard
              content={review.review_content[0].text}
              key={index}
              date={review.review_date}
              name={
                review.reviewer_name.length > 0
                  ? review.reviewer_name[0].text
                  : null
              }
            ></ReviewCard>
          ))}
        </CardContainer>
        <VerticalSpacing size="x-large" />
        <Button
          link="/reviews"
          name="See all Reviews"
          variant="secondary"
        ></Button>
   
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
    allPrismicGeneralReviews(filter: {
      data: { general_reviews: { elemMatch: { featured: { eq: true } } } }
    }): {
      edges: {
        node: {
          id: string
          data: {
            general_reviews: {
              review_content: {
                text: string
              }
              review_date(formatString: "MMMM DD, YYYY"): string
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
    allPrismicGeneralReviews(
      filter: {
        data: { general_reviews: { elemMatch: { featured: { eq: true } } } }
      }
    ) {
      edges {
        node {
          id
          data {
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

export default HomePage
