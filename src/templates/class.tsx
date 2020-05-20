import React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Heading from "../components/typography/Heading"
import RichText from "../components/RichText"
import BodyText from "../components/typography/BodyText"
import Accordion from "../components/Accordion"
import SectionResponsiveImage from "../components/SectionResponsiveImage"
import Card from "../components/Card"
import VerticalSpacing from "../components/utilities/VerticalSpacing"
import Emphasis from "../components/Emphasis"

export default function ClassPage({ data }) {
  let classInfo = data.prismicClass.data
  console.log(classInfo)
  return (
    <Layout>
      <Section>
        <Heading element="h1">{classInfo.class_title.text}</Heading>
       
          <RichText
            content={classInfo.class_summary.html}
            emphasiseText
          ></RichText>
        
        {classInfo.class_main_image.thumbnails.Tablet.url && (
          <>
          <VerticalSpacing size="large"></VerticalSpacing>
          <SectionResponsiveImage
            imgObj={classInfo.class_main_image}
            applyFilter
          ></SectionResponsiveImage>
          </>
        )}
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
              <Heading element="h2">{classInfo.class_title.text} Details...</Heading>
            )}
            <RichText content={classInfo.class_details.html} starredList></RichText>

          {classInfo.class_bonus_content.html && (
            <>
            <Emphasis color="secondary">
             <Heading element="h3">Bonus Content!</Heading>
            <RichText content={classInfo.class_bonus_content.html} starredList></RichText>
            </Emphasis>
            </>
          )}
          </Card>
        </Section>
      )}
      {classInfo.class_curriculum.html && (
        <Section>
          <Heading element="h2">Curriculum</Heading>
          <RichText content={classInfo.class_curriculum.html}></RichText>
        </Section>
      )}
      <Section>
        <>
        <Card border="black">
        <Heading element="h2">Upcoming Dates</Heading>
        {classInfo.class_dates.length > 0 &&
        classInfo.class_dates[0].class_date != null ? (
          <ul>
            {classInfo.class_dates.map((classDate, index) => (
              <li key={index}>
                <BodyText>{classDate.class_date}</BodyText>
              </li>
            ))}
          </ul>
        ) : (
          <BodyText>No upcoming dates scheduled</BodyText>
        )}
        </Card>
        </>
      </Section>
      {classInfo.class_price_options.length > 0 && (
        <Section>
          <>
          <Card border="black">
          <Heading element="h2">Prices</Heading>
          <ul>
            {classInfo.class_price_options.map((priceOption, index) => (
              <li key={index}>
                <BodyText>
                  {priceOption.price_option_title.text}: £{priceOption.price}
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
      {classInfo.class_booking_instructions.html && (
        <Section>
          <>
          <Card bgColor="primary">
          <Heading element="h2">How to book</Heading>
          <RichText
            content={classInfo.class_booking_instructions.html}
          ></RichText>
          </Card>
          </>
        </Section>
      )}
      {classInfo.class_faqs.length > 0 && (
        <Section>
          <Heading element="h2">FAQs</Heading>

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
