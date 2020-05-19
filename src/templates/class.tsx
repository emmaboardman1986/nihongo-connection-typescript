import React from "react"
import Layout from "../components/layout"
import Section from "../components/Section"
import Heading from "../components/typography/Heading"
import RichText from "../components/RichText"
import VerticalSpacing from "../components/utilities/VerticalSpacing"
import BodyText from "../components/typography/BodyText"

export default function ClassPage({ data }) {
  let classInfo = data.prismicClass.data
  return (
    <Layout>
      <Section>
        <Heading element="h1">{classInfo.class_title.text}</Heading>
        <RichText content={classInfo.class_summary.html}></RichText>
        {classInfo.class_main_image.thumbnails.Tablet.url && (
          <img
            src={classInfo.class_main_image.thumbnails.Tablet.url}
            alt=""
          ></img>
        )}
      </Section>
      {classInfo.class_discovery.html && (
        <Section>
          <Heading element="h2">Would you like to discover...</Heading>
          <RichText content={classInfo.class_discovery.html}></RichText>
        </Section>
      )}
      {classInfo.class_details.html && (
        <Section>
          {classInfo.class_discovery.html ? (
            <Heading element="h2">
              If YES, here are the {classInfo.class_title.text} details...
            </Heading>
          ) : (
            <Heading element="h2">
              Here are the {classInfo.class_title.text} details...
            </Heading>
          )}
          <RichText content={classInfo.class_details.html}></RichText>
        </Section>
      )}
      {classInfo.class_bonus_content.html && (
        <RichText content={classInfo.class_bonus_content.html}></RichText>
      )}
      {classInfo.class_curriculum.html && (
        <Section>
          <Heading element="h2">Curriculum</Heading>
          <RichText content={classInfo.class_curriculum.html}></RichText>
        </Section>
      )}
      <Section>
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
      </Section>
      {classInfo.class_price_options.length > 0 && (
        <Section>
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
        </Section>
      )}
      {classInfo.class_booking_instructions.html && (
        <Section>
          <Heading element="h2">How to book</Heading>
          <RichText
            content={classInfo.class_booking_instructions.html}
          ></RichText>
        </Section>
      )}
      {/* {classInfo.class_images.length > 1 && (
        <Section>
          {classInfo.class_images.map((classImage, index) => {

          })}
        </Section>
      )} */}
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
