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
import MailChimp from "../components/MailChimp/MailChimp"
import styled from "styled-components"
import Button from "../components/Button"
import FlexContainer from "../components/utilities/FlexContainer"

export default function ClassPage({ data }) {
  let classInfo = data.prismicClass.data
  return (
    <Layout>
      <Section>
        <VerticalSpacing size={{_: "base"}}></VerticalSpacing>
        <FlexContainer flexDirection={{_: "column", sm: "row"}} justifyContent={{_: "space-between"}}>
          <div>
        <Heading element="h1">{classInfo.class_title.text}</Heading>
        <VerticalSpacing size={{_: "tight"}}></VerticalSpacing>

        <BodyText>
          {classInfo.class_duration && (
            <ClassQuickInfo><small>{classInfo.class_duration}</small></ClassQuickInfo>
          )}{ " "}
          {classInfo.class_location && (
            <ClassQuickInfo><small>{classInfo.class_location}</small></ClassQuickInfo>
          )}
        </BodyText>
        <VerticalSpacing size={{_: "xLoose"}}></VerticalSpacing>
        </div>
        {classInfo.class_main_image.thumbnails.Tablet.url && (
          <>
           
            <SectionResponsiveImage
              imgObj={classInfo.class_main_image}
              applyFilter
            ></SectionResponsiveImage>
          </>
        )}
        </FlexContainer>
         <VerticalSpacing size={{_: "base"}}></VerticalSpacing>
        <RichText
          content={classInfo.class_summary.html}
          emphasiseText
        ></RichText> 
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
                  <VerticalSpacing size={{_: "tight"}}></VerticalSpacing>
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
            ) : classInfo.class_title.text === "Friday Study Club" ? (<BodyText>This Friday! (& every Friday after!)</BodyText>) :  
            
            classInfo.class_title.text === "1:1 Lessons" ? (<BodyText>Suit your own schedule - check availability <a href="https://www.meetingbird.com/m/B1T8nUh6S" target="_blank">here!</a></BodyText>) :  
            
            
            (
              <>
                <BodyText>No upcoming dates scheduled.</BodyText>
                <VerticalSpacing></VerticalSpacing>
                <BodyText>
                  Join our <a href="#mailing-list">mailing list</a> to be notified as soon as new classes
                  are announced!
                </BodyText>
              </>
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
                      {priceOption.price_option_title.text && (<strong>{priceOption.price_option_title.text}: </strong>)}
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
      {classInfo.class_booking_instructions.html && (
        <Section>
          <>
            <Card bgColor="primary">
              <Heading element="h2">How to book</Heading>
              <RichText
                content={classInfo.class_booking_instructions.html}
              ></RichText>
              <VerticalSpacing size={{_: "baseTight"}}></VerticalSpacing>
              {classInfo.class_booking_link.url != null && (
                <Button isCentered isExternal link={classInfo.class_booking_link.url}>Book now!</Button>
              )}
              
            </Card>
          </>
        </Section>
      )}
      {classInfo.class_faqs.length > 1 && (
        <Section>
          <Heading element="h2">FAQs</Heading>

          <Accordion>{classInfo.class_faqs}</Accordion>
        </Section>
      )}
      <span id="mailing-list"></span>
      <Section>
        <Heading element="h2">Interested but unsure?</Heading>
        <BodyText>Join our mailing list to keep in touch!</BodyText>
        <VerticalSpacing size={{_: "baseTight"}}></VerticalSpacing>
        <Card bgColor="primary">
          <MailChimp emphasisColor="primary" />
        </Card>
      </Section>
    </Layout>
  )
}

const ClassQuickInfo = styled.span`
  background-color: black;
  color: white;
  border-radius: 6px;
  margin-right: 0.25rem;
  padding: 0.5rem 1rem;
  white-space: nowrap;

`

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
