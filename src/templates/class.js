import React from "react"
import Layout from "../components/layout"
import Section from "../components/Section"
import Heading from "../components/typography/Heading"
import RichText from "../components/RichText"
import VerticalSpacing from "../components/utilities/VerticalSpacing"

export default function ClassPage({ data }) {
    let classInfo = data.prismicClass.data;
    console.log(classInfo);
    return (
        <Layout>
            <Section>
                <Heading element="h1">
                    {classInfo.class_title.text}
                </Heading>
                <RichText
                    content={classInfo.class_summary.html}
                ></RichText>
                <VerticalSpacing size="large" />

            </Section>
        </Layout>
    )
}

export const query = graphql`
  query($uid: String!) {
    prismicClass(uid: { eq: $uid }) {
        data {
            class_bonus_content {
              html
            }
            class_title {
              text
            }
            class_booking_instructions {
              html
            }
            class_curriculum {
              html
            }
            class_dates {
              class_date(locale: "en-GB")
            }
            class_details {
              html
            }
            class_discovery {
              html
            }
            class_duration
            class_images {
              class_image {
                alt
                thumbnails {
                  Tablet {
                    url
                  }
                  thumbnail {
                    url
                  }
                }
              }
            }
            class_learning_style
            class_location
            class_main_image {
              thumbnails {
                Tablet {
                  url
                }
                thumbnail {
                  url
                }
              }
              url
            }
            class_price_options {
              price
              price_option_details {
                text
              }
              price_option_title {
                text
              }
            }
            class_schedule
            class_summary {
              html
            }
            class_target
          }
    }
  }
`