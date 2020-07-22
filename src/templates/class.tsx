import React, { useEffect } from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Heading from "../components/Heading"
import RichText from "../components/RichText"
import BodyText from "../components/BodyText"
import Accordion from "../components/Accordion"
import ClassHero from "../components/ClassHero"
import Card from "../components/Card"
import VerticalSpacing from "../components/VerticalSpacing"
import Emphasis from "../components/Emphasis"
import { graphql } from "gatsby"
import Logo from "../../static/logo.svg"

export default function ClassPage({ data }) {
  useEffect(() => {
    const script = document.createElement("script")
    script.setAttribute(
      "src",
      "https://nihongoconnection.activehosted.com/f/embed.php?id=3"
    )
    document.body.appendChild(script)
  }, [])

  let classInfo = data.prismicClass.data
  return (
    <Layout>
      <Section>
        <VerticalSpacing size={{ _: "base" }}></VerticalSpacing>
        <ClassHero
          title={classInfo.class_title.text}
          duration={classInfo.class_duration}
          location={classInfo.class_location}
          image={classInfo.class_main_image}
          summary={classInfo.class_summary.html}
        ></ClassHero>
      </Section>
      {classInfo.class_discovery.html && (
        <Section>
          <Card border="primary" bgColor="primaryLight">
            <Heading element="h2">Would you like to discover...</Heading>
            <RichText
              content={classInfo.class_discovery.html}
              emphasiseText
            ></RichText>
          </Card>
        </Section>
      )}

      {classInfo.class_details.html && (
        <Section>
          <Card bgColor="secondary">
            {classInfo.class_discovery.html ? (
              <Heading element="h2">
                If YES, here are the {classInfo.class_title.text} details...
              </Heading>
            ) : (
              <Heading element="h2">
                {classInfo.class_title.text} Details...
              </Heading>
            )}
            <RichText
              content={classInfo.class_details.html}
              starredList
            ></RichText>

            {classInfo.class_bonus_content.html && (
              <>
                <Emphasis color="secondary" noPaddingBottom>
                  <Heading element="h3">Bonus Content!</Heading>
                  <VerticalSpacing size={{ _: "tight" }}></VerticalSpacing>
                  <RichText
                    content={classInfo.class_bonus_content.html}
                    starredList
                  ></RichText>
                </Emphasis>
              </>
            )}
          </Card>
        </Section>
      )}
      {classInfo.class_curriculum.html &&
        classInfo.class_curriculum.html != null && (
          <Section>
            <>
              <Card bgColor="secondary">
                <Heading element="h2">Curriculum</Heading>
                <RichText
                  content={classInfo.class_curriculum.html}
                  starredList
                ></RichText>
              </Card>
            </>
          </Section>
        )}
      {classInfo.class_price_options.length > 0 &&
        classInfo.class_price_options[0].price != null && (
          <Section>
            <>
              <Card border="black">
                <Heading element="h2">Prices</Heading>
                <ul>
                  {classInfo.class_price_options.map((priceOption, index) => (
                    <li key={index}>
                      <BodyText>
                        {priceOption.price_option_title.text && (
                          <strong>
                            {priceOption.price_option_title.text}:{" "}
                          </strong>
                        )}
                        £{priceOption.price}
                      </BodyText>
                      {priceOption.price_option_details && (
                        <RichText
                          content={priceOption.price_option_details.html}
                        ></RichText>
                      )}
                    </li>
                  ))}
                </ul>
              </Card>
            </>
          </Section>
        )}
      {}

      <VerticalSpacing size={{ _: "baseLoose" }}></VerticalSpacing>
      <Section bgImg={Logo}>
        <div className="_form_3"></div>
      </Section>

      {classInfo.class_faqs.length > 1 && (
        <Section>
          <Accordion>{classInfo.class_faqs}</Accordion>
        </Section>
      )}
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
        class_type
        class_booking_instructions {
          html
        }
        class_booking_title {
          text
        }
        class_booking_link {
          url
        }
        class_curriculum {
          html
        }
        class_details {
          html
        }
        class_discovery {
          html
        }
        class_duration
        class_faqs {
          class_faq_answer {
            html
          }
          class_faq_question {
            text
          }
        }
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
            html
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
