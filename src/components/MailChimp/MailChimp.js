import React, { useState, useReducer, useRef } from "react"
import styled from "styled-components"
import Form from "../form/Form"
import FormList from "../form/FormList"
import InputBox from "../form/InputBox"
import Label from "../form/Label"
import GDPR from "../form/GDPR"
import CheckBox from "../form/CheckBox"
import Emphasis from "../Emphasis"
import { setFont } from "../../styles/styleHelpers"
import Button from "../../components/Button"
import addToMailchimp from "gatsby-plugin-mailchimp"
import BodyText from "../typography/BodyText"
import VerticalSpacing from "../utilities/VerticalSpacing"
import BrandSuccess from "../../../static/brandtick.svg"
import BrandWarn from "../../../static/brandwarn.svg"
import TextLink from "../TextLink"

const MailChimp = ({ emphasisColor }) => {
  const [result, setResult] = useState(null)
  const submitButtonEl = useRef(null)

  const initialState = {
    email: "",
    firstName: "",
    oneToOne: false,
    jlptBootcamp: false,
    beginnersCourse: false,
    beginnersBootcamp: false,
    onlineConversationClub: false,
    marketingByEmail: false,
  }

  function reducer(state, { field, value }) {
    return {
      ...state,
      [field]: value,
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = e => {
    setResult(null)
    dispatch({ field: e.target.name, value: e.target.value })
  }

  const onToggle = e => {
    dispatch({ field: e.target.name, value: !state[e.target.name] })
  }

  const {
    email,
    firstName,
    oneToOne,
    jlptBootcamp,
    beginnersCourse,
    beginnersBootcamp,
    onlineConversationClub,
    marketingByEmail,
  } = state

  // TODO: make less awful :)
  const buildMailChimpObject = () => {
    const mailchimpObject = {
      FNAME: firstName,
    }
    if (oneToOne) {
      mailchimpObject["group[1891][4]"] = "4"
    }
    if (jlptBootcamp) {
      mailchimpObject["group[1891][8]"] = "8"
    }
    if (beginnersCourse) {
      mailchimpObject["group[1891][16]"] = "16"
    }
    if (beginnersBootcamp) {
      mailchimpObject["group[1891][32]"] = "32"
    }
    if (onlineConversationClub) {
      mailchimpObject["group[1891][64]"] = "64"
    }
    if (marketingByEmail) {
      mailchimpObject["gdpr[27377]"] = "Y"
    }
    return mailchimpObject
  }
  const handleSubmit = async e => {
    e.preventDefault()
    submitButtonEl.current.classList.add("on-click")
    const mailchimpResult = await addToMailchimp(email, buildMailChimpObject())
    setResult(mailchimpResult)
  }

  return (
    <MailChimpWrapper>
      <Form name="mc-embedded-subscribe-form">
        <div className="mc-field-group">
          <Label htmlFor="mce-EMAIL">
            Email Address <span className="asterisk">*</span>
          </Label>
          <InputBox
            type="email"
            value={email}
            name="email"
            id="mce-EMAIL"
            onChange={onChange}
            required
          />
        </div>
        <div className="mc-field-group">
          <Label htmlFor="mce-FNAME">First Name </Label>
          <InputBox
            type="text"
            value={firstName}
            name="firstName"
            id="mce-FNAME"
            onChange={onChange}
          />
        </div>
        <VerticalSpacing size={{ _: "base" }}></VerticalSpacing>
        <Emphasis
          className="mc-field-group input-group"
          padding="1rem"
          color={emphasisColor}
        >
          <MailChimpFieldset>
            <MailChimpLegend>
              What would you like to hear about?
            </MailChimpLegend>
            <VerticalSpacing size={{ _: "baseTight" }}></VerticalSpacing>
            <FormList flex={true}>
              <li flex={true}>
                <CheckBox
                  value={oneToOne}
                  name="oneToOne"
                  id="mce-group[1891]-1891-0"
                  onChange={onToggle}
                />
                <Label htmlFor="mce-group[1891]-1891-0" display="inline-block">
                  1-1 lessons
                </Label>
              </li>
              <li flex={true}>
                <CheckBox
                  value={jlptBootcamp}
                  name="jlptBootcamp"
                  id="mce-group[1891]-1891-1"
                  onChange={onToggle}
                />
                <Label htmlFor="mce-group[1891]-1891-1" display="inline-block">
                  JLPT Bootcamps
                </Label>
              </li>
              <li flex={true}>
                <CheckBox
                  value={beginnersCourse}
                  name="beginnersCourse"
                  id="mce-group[1891]-1891-2"
                  onChange={onToggle}
                />
                <Label htmlFor="mce-group[1891]-1891-2" display="inline-block">
                  Beginner courses
                </Label>
              </li>
              <li flex={true}>
                <CheckBox
                  value={beginnersBootcamp}
                  name="beginnersBootcamp"
                  id="mce-group[1891]-1891-3"
                  onChange={onToggle}
                />
                <Label htmlFor="mce-group[1891]-1891-3" display="inline-block">
                  Beginner Bootcamps
                </Label>
              </li>
              <li flex={true}>
                <CheckBox
                  value={onlineConversationClub}
                  name="onlineConversationClub"
                  id="mce-group[1891]-1891-4"
                  onChange={onToggle}
                />
                <Label htmlFor="mce-group[1891]-1891-4" display="inline-block">
                  Online Japanese Conversation Club Membership
                </Label>
              </li>
            </FormList>
          </MailChimpFieldset>
        </Emphasis>
        <GDPR>
          <MailChimpFieldset name="interestgroup_field">
            <MailChimpLegend>
              How would you like to hear from us?
            </MailChimpLegend>
            <Label htmlFor="gdpr_27377">
              <CheckBox
                id="gdpr_27377"
                name="marketingByEmail"
                value={marketingByEmail}
                onChange={onToggle}
              />
              <span>Contact me by Email</span>{" "}
            </Label>
            {/* <Label className="checkbox subfield" htmlFor="gdpr_27385">
                    <CheckBox
                      id="gdpr_27385"
                      name="gdpr[27385]"
                      value="Y"
                      className="av-checkbox gdpr"
                    />
                    <span>Contact me via Customized Online Advertising</span>{" "}
                  </Label> */}
          </MailChimpFieldset>
          <VerticalSpacing size={{ _: "base" }}></VerticalSpacing>
          <BodyText><small>
            We use Mailchimp as our marketing platform. By clicking below to
            subscribe, you acknowledge that your information will be transferred
            to Mailchimp for processing.{" "}
            <TextLink
              link=" https://mailchimp.com/legal/"
              isExternal
              isOnBrandBg
            >
              Learn more about Mailchimp's privacy practices here.
            </TextLink>
          </small>
          </BodyText>
        </GDPR>
        <VerticalSpacing size={{ _: "baseLoose" }}></VerticalSpacing>
        {result && result.msg ? (
          <div role="status" aria-live="polite">
            <VerticalSpacing></VerticalSpacing>
            <Emphasis color="black" bgColor="white" alignCenter>

              {result.result === "success" ? (
                <img src={BrandSuccess} alt="Success" width="44px"></img>
              ) : (
                  <img src={BrandWarn} alt="error" width="44px"></img>
                )}
              <VerticalSpacing></VerticalSpacing>
              <BodyText font={setFont.fontSecondary} align="center">
                {result.msg}
              </BodyText>

            </Emphasis>
            <VerticalSpacing size={{ _: "baseTight" }}></VerticalSpacing>
          </div>
        ) : (
            <Button
              ref={submitButtonEl}
              type="submit"
              name="Subscribe"
              id="mc-embedded-subscribe"
              isAction
              isCentered
              onClick={handleSubmit}
            >
              Subscribe to mailing list
            </Button>
          )}
        <VerticalSpacing size={{ _: "base" }}></VerticalSpacing>
        <BodyText>
          <small>
            You can unsubscribe at any time by clicking the link in the footer of
            our emails. For information about our privacy practices, please visit
          the{" "}
            <TextLink
              link="https://www.nihongoconnection.com"
              isExternal
              isOnBrandBg
            >
              Nihongo Connection website
          </TextLink>
          </small>
        </BodyText>
      </Form>
    </MailChimpWrapper>
  )
}

const MailChimpWrapper = styled.div``

const MailChimpLegend = styled.legend`
  font-size: 1rem;
  font-family: "Poppins-Regular";
  margin-bottom: 0.5rem;
`

const MailChimpFieldset = styled.fieldset`
  border: none;
`

export default MailChimp
