import React from "react"
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import Section from "../components/Section"
import BodyText from "../components/BodyText"
import SocialLinks from "../components/SocialLinks"
import FlexContainer from "../components/utilities/FlexContainer"
import TextLink from "../components/TextLink"
import MailChimp from "../components/MailChimp/MailChimp"
import Emphasis from "../components/Emphasis"
import Card from "../components/Card"

import VerticalSpacing from "../components/utilities/VerticalSpacing"

interface Props {
  //   readonly data: ContactPageQueryData
}

const ContactPage: React.FC<Props> = () => {
  return (
    <Layout>
      <Section>
        <Heading element="h1">Get in touch!</Heading>
        <BodyText>We'd love to hear from you.</BodyText>
        <VerticalSpacing size={{ _: "base" }}></VerticalSpacing>
        <Emphasis color="primary">
    
          <FlexContainer
            flexDirection={{ _: "column" }}
            alignItems={{ _: "center" }}
          >
            <VerticalSpacing size={{ _: "baseTight" }}></VerticalSpacing>
            <SocialLinks></SocialLinks>
            <VerticalSpacing size={{ _: "tight" }}></VerticalSpacing>
            <TextLink link="mailto:nihongoscotland@gmail.com" isExternal>
              NihongoScotland@gmail.com
            </TextLink>
          </FlexContainer>
        </Emphasis>
        <VerticalSpacing size={{ _: "loose" }}></VerticalSpacing>
        <BodyText>
          Sign up to our mailing list to hear about new classes and events first
        </BodyText>
        <VerticalSpacing size={{ _: "loose" }}></VerticalSpacing>
        <Card bgColor="primary">
          <MailChimp emphasisColor="primary"></MailChimp>
        </Card>
      </Section>
    </Layout>
  )
}

export default ContactPage
