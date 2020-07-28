import React, { useEffect } from "react"
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import Section from "../components/Section"
import BodyText from "../components/BodyText"
import SocialLinks from "../components/SocialLinks"
import FlexContainer from "../components/FlexContainer"
import TextLink from "../components/TextLink"
import Gradient from "../components/Gradient"
import Card from "../components/Card"

import Logo from "../../static/logo.svg"

import VerticalSpacing from "../components/VerticalSpacing"

interface Props {
  //   readonly data: ContactPageQueryData
}

const ContactPage: React.FC<Props> = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.setAttribute(
      "src",
      "https://nihongoconnection.activehosted.com/f/embed.php?id=3"
    )
    document.body.appendChild(script)
  }, [])
  return (
    <Layout>
      <Section>
        <Heading element="h1">Get in touch!</Heading>
        <BodyText>We'd love to hear from you.</BodyText>
        <VerticalSpacing size={{ _: "xLoose" }}></VerticalSpacing>
        <Gradient center>
          <Card bgColor="white" fullWidth>
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
          </Card>
        </Gradient>

        <VerticalSpacing size={{ _: "loose" }}></VerticalSpacing>

        <Section bgImg={Logo}>
          <div className="_form_3"></div>
        </Section>
      </Section>
    </Layout>
  )
}

export default ContactPage
