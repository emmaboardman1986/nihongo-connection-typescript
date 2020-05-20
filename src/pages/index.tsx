import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RichText from "../components/RichText"
import Heading from "../components/typography/Heading"
import Section from "../components/Section"
import Button from "../components/Button"
import ReviewCarouselSection from "../components/reusedSections/ReviewCarouselSection"
import CardContainer from "../components/cards/CardContainer"
import SectionResponsiveImage from "../components/SectionResponsiveImage"
import Hero from "../components/Hero"

import VerticalSpacing from "../components/utilities/VerticalSpacing"
import { breakpoints } from "../styles/styleHelpers"

interface Props {
  readonly data: PageQueryData
}

const HomePage: React.FC<Props> = ({ data }) => {
  const popularClasses = data.allPrismicClass.edges
  return (
    <Layout>
      <Section>
        <Hero>
          <Heading element="h1">
            {data.prismicHomepa.data.homepage_title.text}
          </Heading>
          <RichText
            content={data.prismicHomepa.data.homepage_summary.html}
          ></RichText>
          <VerticalSpacing size="large" />
          <Button
            link="/explore"
            name={data.prismicHomepa.data.homepage_cta_button_text.text}
          ></Button>
        </Hero>
      </Section>
      <Section>
        <Heading element="h2">
          {data.prismicHomepa.data.homepage_1st_section_title.text}
        </Heading>
        <VerticalSpacing size="x-small" />

        <CardContainer
          cardContent={popularClasses}
          cardType="class"
        ></CardContainer>
        <VerticalSpacing size="x-large" />
        <Button
          link="/explore"
          name="See all Classes"
          variant="secondary"
        ></Button>
      </Section>
      <ReviewCarouselSection></ReviewCarouselSection>

      <Section>
        <Heading element="h2">
          {data.prismicHomepa.data.homepage_3rd_section_title.text}
        </Heading>
        <RichText
          content={data.prismicHomepa.data.homepage_3rd_section_content.html}
        ></RichText>
        <VerticalSpacing />
        <SectionResponsiveImage
          imgObj={data.prismicHomepa.data.homepage_3rd_section_image}
        ></SectionResponsiveImage>
        <VerticalSpacing />
        <Heading element="h2">
          {data.prismicHomepa.data.homepage_4th_section_title.text}
        </Heading>
        <RichText
          content={data.prismicHomepa.data.homepage_4th_section_content.html}
        ></RichText>
        <VerticalSpacing />
        <SectionResponsiveImage
          imgObj={data.prismicHomepa.data.homepage_4th_section_image}
        ></SectionResponsiveImage>
        <VerticalSpacing />
        <Heading element="h2">
          {data.prismicHomepa.data.homepage_5th_section_title.text}
        </Heading>
        <RichText
          content={data.prismicHomepa.data.homepage_5th_section_content.html}
        ></RichText>
        <VerticalSpacing />
        <SectionResponsiveImage
          imgObj={data.prismicHomepa.data.homepage_5th_section_image}
        ></SectionResponsiveImage>
      </Section>
      <VerticalSpacing></VerticalSpacing>
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
        homepage_3rd_section_image: {
          alt: string
          url: string
          thumbnails: {
            Tablet: {
              url: string
            }
            thumbnail: {
              url: string
            }
          }
        }
        homepage_4th_section_content: {
          html: string
        }
        homepage_4th_section_title: {
          text: string
        }
        homepage_4th_section_image: {
          alt: string
          url: string
          thumbnails: {
            Tablet: {
              url: string
            }
            thumbnail: {
              url: string
            }
          }
        }
        homepage_5th_section_content: {
          html: string
        }
        homepage_5th_section_title: {
          text: string
        }
        homepage_5th_section_image: {
          alt: string
          url: string
          thumbnails: {
            Tablet: {
              url: string
            }
            thumbnail: {
              url: string
            }
          }
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

    allPrismicClass(filter: {
      data: { class_popular: { eq: true } }
    }): {
      edges: {
        node: {
          uid: string
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
            class_location: string
            class_dates: {
              class_date(formatString: "MMMM DD YYYY"): string
            }
            class_schedule: string
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
        homepage_3rd_section_image {
          alt
          url
          thumbnails {
            Tablet {
              url
            }
            thumbnail {
              url
            }
          }
        }
        homepage_4th_section_content {
          html
        }
        homepage_4th_section_title {
          text
        }
        homepage_4th_section_image {
          alt
          url
          thumbnails {
            Tablet {
              url
            }
            thumbnail {
              url
            }
          }
        }
        homepage_5th_section_content {
          html
        }
        homepage_5th_section_title {
          text
        }
        homepage_5th_section_image {
          alt
          url
          thumbnails {
            Tablet {
              url
            }
            thumbnail {
              url
            }
          }
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

    allPrismicClass(filter: { data: { class_popular: { eq: true } } }) {
      edges {
        node {
          uid
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
            class_location
            class_dates {
              class_date(formatString: "MMMM DD")
            }
            class_schedule
          }
        }
      }
    }
  }
`

export default HomePage
