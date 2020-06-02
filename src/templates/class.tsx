import React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Heading from "../components/typography/Heading"
import RichText from "../components/RichText"
import BodyText from "../components/typography/BodyText"
import Accordion from "../components/Accordion"
import ClassHero from "../components/ClassHero"
import Card from "../components/Card"
import VerticalSpacing from "../components/utilities/VerticalSpacing"
import Emphasis from "../components/Emphasis"
import MailChimp from "../components/MailChimp/MailChimp"
import Button from "../components/Button"
import { graphql } from "gatsby"
import TextLink from "../components/TextLink"

export default function ClassPage({ data }) {
  let classInfo = data.prismicClass.data
  console.log(classInfo)
  return (
    <Layout>
      <Section>
        <VerticalSpacing size={{ _: "base" }}></VerticalSpacing>
        <ClassHero title={classInfo.class_title.text} duration={classInfo.class_duration} location={classInfo.class_location} image={classInfo.class_main_image} summary={classInfo.class_summary.html}></ClassHero> 
        
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
      {classInfo.class_curriculum.html && (
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
      {classInfo.class_dates.length > 0 &&
        classInfo.class_dates[0].class_date != null && (
          <Section>
            <>
              <Card border="primary">
                <Heading element="h2">Upcoming Dates</Heading>
                <ul>
                  {classInfo.class_dates.map((classDate, index) => (
                    <li key={index}>
                      <BodyText>{classDate.class_date}</BodyText>
                    </li>
                  ))}
                </ul>
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
      <Section>
        <>
          <Card bgColor="primary">
            {classInfo.class_dates.length > 0 &&
            classInfo.class_dates[0].class_date === null ? (
              classInfo.class_type === "Friday Conversation Club" ? (
                <>
                  <Heading element="h2">
                    {classInfo.class_booking_title.text}
                  </Heading>
                  <RichText
                    content={classInfo.class_booking_instructions.html}
                  ></RichText>
                  <VerticalSpacing size={{ _: "loose" }}></VerticalSpacing>
                  <MailChimp />
                </>
              ) : classInfo.class_type === "By Application" ? (
                <>
                  <Heading element="h2">
                    {classInfo.class_booking_title.text}
                  </Heading>
                  <RichText
                    content={classInfo.class_booking_instructions.html}
                  ></RichText>
                  <VerticalSpacing size={{ _: "baseTight" }}></VerticalSpacing>
                  <p>
                    <TextLink
                      link="mailto:hello@nihongoconnection.com"
                      isExternal
                    >
                      hello@nihongoconnection.com
                    </TextLink>
                  </p>
                </>
              ) : (
                <>
                  <Heading element="h2">Applications now open!</Heading>
                  <RichText content="<p>We don't currently have any course dates scheduled. Join the mailing list to be notified of new dates!</p>"></RichText>
                  <VerticalSpacing size={{ _: "loose" }}></VerticalSpacing>

                  <MailChimp />
                </>
              )
            ) : (
              <>
                <Heading element="h2">
                  {classInfo.class_booking_title.text}
                </Heading>
                <RichText
                  content={classInfo.class_booking_instructions.html}
                ></RichText>
                <VerticalSpacing size={{ _: "base" }}></VerticalSpacing>
                <Button
                  isCentered
                  isExternal
                  link={classInfo.class_booking_link.url}
                >
                  Book now!
                </Button>
              </>
            )}
          </Card>
        </>
      </Section>
      {classInfo.class_faqs.length > 1 && (
        <Section>
          <Heading element="h2">FAQs</Heading>

          <Accordion>{classInfo.class_faqs}</Accordion>
        </Section>
      )}
      {classInfo.class_type != "Friday Conversation Club" && (
        <Section>
          <Heading element="h2">Mailing List</Heading>
          <BodyText>
            Join the community to get access to our events + activities
          </BodyText>

          <VerticalSpacing size={{ _: "baseTight" }}></VerticalSpacing>
          <Card bgColor="primary">
            <MailChimp emphasisColor="primary" />
          </Card>
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
        class_dates {
          class_date(formatString: "MMMM DD YYYY")
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
