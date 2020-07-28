import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Heading from "../components/Heading"
import BodyText from "../components/BodyText"
import VerticalSpacing from "../components/VerticalSpacing"
import TextLink from "../components/TextLink"
import Emphasis from "../components/Emphasis"
import RadioGroup from "../components/RadioGroup"
import RadioButton from "../components/RadioButton"
import { useGetCookie } from "../customHooks/useGetCookie"
import { useSetCookies } from "../customHooks/useSetCookie"
import { useRemoveCookie } from "../customHooks/useRemoveCookie"

const cookiePolicy = () => {
  const [isAnalyticsAccepted, setIsAnalyticsAccepted] = useState(
    useGetCookie("acceptTrackingCookies")
  )

  useEffect(() => {
    if (!isAnalyticsAccepted) {
      useRemoveCookie("_ga")
      useRemoveCookie("_gid")
      useRemoveCookie("_gat")
      useRemoveCookie("AMP_TOKEN")
      useRemoveCookie("_gac_<property-id>")
      useRemoveCookie("_gat_gtag_UA_172528940_1")
    }
  }, [isAnalyticsAccepted])

  const handleChange = () => {
    useSetCookies("acceptTrackingCookies", !isAnalyticsAccepted)
    setIsAnalyticsAccepted(!isAnalyticsAccepted)
  }

  return (
    <Layout>
      <Section>
        <Heading element="h1">Cookie Policy</Heading>
        <BodyText>Nihongo Connection uses two types of cookies.</BodyText>
        <VerticalSpacing></VerticalSpacing>
        <Heading element="h2">Essential Cookies</Heading>
        <BodyText>
          We use essential cookies to enable the use of our community sign-up
          forms.
        </BodyText>
        <VerticalSpacing></VerticalSpacing>
        <BodyText>
          The community mailing list is our primary means of communicating with
          members and providing updates on when our courses are running. It
          forms an essential part of our business, and the reCAPTCHA within form
          ensures we do not get inundated with spam.
        </BodyText>
        <VerticalSpacing></VerticalSpacing>
        <BodyText>
          The following essential cookies are set by Active Campaign (our
          mailing list provider):
        </BodyText>
        <VerticalSpacing></VerticalSpacing>

        <ul style={{ marginLeft: "2rem" }}>
          <li>
            <BodyText>PHPSESSID</BodyText>
          </li>
        </ul>
        <VerticalSpacing></VerticalSpacing>
        <BodyText>
          The following essential cookies are set by Google reCAPTCHA:
        </BodyText>
        <VerticalSpacing></VerticalSpacing>

        <ul style={{ marginLeft: "2rem" }}>
          <li>
            <BodyText>PREF</BodyText>
          </li>

          <li>
            <BodyText>NID</BodyText>
          </li>

          <li>
            <BodyText>HSID</BodyText>
          </li>

          <li>
            <BodyText>APISID</BodyText>
          </li>
          <li>
            <BodyText>1P_JAR</BodyText>
          </li>
          <li>
            <BodyText>DV</BodyText>
          </li>
          <li>
            <BodyText>SID</BodyText>
          </li>
          <li>
            <BodyText>CONSENT</BodyText>
          </li>
          <li>
            <BodyText>ANID</BodyText>
          </li>
        </ul>
        <VerticalSpacing></VerticalSpacing>

        <Heading element="h2">Analytics Cookies</Heading>
        <BodyText>
          We use optional Google Analytics cookies to track page views.
        </BodyText>
        <VerticalSpacing></VerticalSpacing>
        <BodyText>
          We use this information to improve the quality of our product and our
          website.
        </BodyText>
        <VerticalSpacing></VerticalSpacing>
        <BodyText>
          The following optional cookies are set by Google Analytics:
          <VerticalSpacing></VerticalSpacing>
          <ul style={{ marginLeft: "2rem" }}>
            <li>_ga</li>

            <li>_gid</li>

            <li>_gat</li>

            <li>AMP_TOKEN</li>

            <li>_gac property-id</li>
          </ul>
        </BodyText>
        <VerticalSpacing></VerticalSpacing>
        <BodyText>
          For up-to-date information on cookie expiration times and
          descriptions, please visit the{" "}
          <TextLink
            link="https://developers.google.com/analytics/devguides/collection/gajs/cookie-usage"
            isExternal
          >
            Google Documentation
          </TextLink>
        </BodyText>
        <VerticalSpacing></VerticalSpacing>
        <Emphasis>
          <RadioGroup legend="Allow Analytics cookies">
            <RadioButton
              id="analytics-yes"
              name="analytics"
              value="yes"
              labelText="Yes"
              checked={isAnalyticsAccepted}
              onChange={handleChange}
            />
            <RadioButton
              id="analytics-no"
              name="analytics"
              value="no"
              labelText="No"
              checked={!isAnalyticsAccepted}
              onChange={handleChange}
            />
          </RadioGroup>
        </Emphasis>
      </Section>
    </Layout>
  )
}

export default cookiePolicy
