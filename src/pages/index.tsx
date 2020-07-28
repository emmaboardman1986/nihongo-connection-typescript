import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RichText from "../components/RichText"
import Heading from "../components/Heading"
import Section from "../components/Section"
import Button from "../components/Button"
import ReviewCarouselSection from "../components/reusedSections/ReviewCarouselSection"
import CardContainer from "../components/CardContainer"
import SectionResponsiveImage from "../components/SectionResponsiveImage"
import Hero from "../components/Hero"
import FlexContainer from "../components/FlexContainer"

import VerticalSpacing from "../components/VerticalSpacing"

interface Props {
  readonly data: PageQueryData
}

const HomePage: React.FC<Props> = ({ data }) => {
  const popularClasses = data["allPrismicClass"].edges
  return (
    <Layout>
      <Section>
        <VerticalSpacing size={{ _: "xTight", sm: "base" }}></VerticalSpacing>
        <Hero>
          <Heading element="h1">
            {data.prismicHomepa.data.homepage_title.text}
          </Heading>
          <RichText
            content={data.prismicHomepa.data.homepage_summary.html}
          ></RichText>
          <VerticalSpacing size={{ _: "loose", sm: "xTight" }} />
          <Button link="/explore">
            {data.prismicHomepa.data.homepage_cta_button_text.text}
          </Button>
        </Hero>
      </Section>
      <Section>
        <Heading element="h2">
          {data.prismicHomepa.data.homepage_1st_section_title.text}
        </Heading>

        <CardContainer
          cardContent={popularClasses}
          cardType="class"
        ></CardContainer>
        <VerticalSpacing size={{ _: "xLoose" }} />
        <Button link="/explore" variant="secondary">
          See all classes
        </Button>
        <VerticalSpacing size={{ _: "loose", sm: "xLoose" }} />
      </Section>
      <ReviewCarouselSection></ReviewCarouselSection>

      <Section>
        <FlexContainer
          flexDirection={{ _: "column", sm: "row" }}
          justifyContent={{ _: "space-around" }}
        >
          <div>
            <Heading element="h2">
              {data.prismicHomepa.data.homepage_3rd_section_title.text}
            </Heading>

            <RichText
              content={
                data.prismicHomepa.data.homepage_3rd_section_content.html
              }
            ></RichText>
            <VerticalSpacing size={{ _: "baseTight" }} />
          </div>
          <SectionResponsiveImage
            imgObj={data.prismicHomepa.data.homepage_3rd_section_image}
          ></SectionResponsiveImage>
        </FlexContainer>
        <VerticalSpacing size={{ _: "loose" }} />
        <FlexContainer
          flexDirection={{ _: "column", sm: "row-reverse" }}
          justifyContent={{ _: "space-around" }}
        >
          <div>
            <Heading element="h2">
              {data.prismicHomepa.data.homepage_4th_section_title.text}
            </Heading>
            <RichText
              content={
                data.prismicHomepa.data.homepage_4th_section_content.html
              }
            ></RichText>
            <VerticalSpacing size={{ _: "baseTight" }} />
          </div>
          <SectionResponsiveImage
            imgObj={data.prismicHomepa.data.homepage_4th_section_image}
          ></SectionResponsiveImage>
        </FlexContainer>
        <VerticalSpacing size={{ _: "loose" }} />
        <FlexContainer
          flexDirection={{ _: "column", sm: "row" }}
          justifyContent={{ _: "space-around" }}
        >
          <div>
            <Heading element="h2">
              {data.prismicHomepa.data.homepage_5th_section_title.text}
            </Heading>
            <RichText
              content={
                data.prismicHomepa.data.homepage_5th_section_content.html
              }
            ></RichText>
            <VerticalSpacing size={{ _: "baseTight" }} />
          </div>
          <SectionResponsiveImage
            imgObj={data.prismicHomepa.data.homepage_5th_section_image}
          ></SectionResponsiveImage>
        </FlexContainer>
      </Section>
    </Layout>
  )
}

interface PageQueryData {
  // data: {
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
    // }

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
            class_type: string
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
            class_schedule: string
            class_1_bullet_preview: {
              text: string
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
            class_type
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
            class_schedule
            class_1_bullet_preview {
              text
            }
          }
        }
      }
    }
  }
`

export default HomePage
