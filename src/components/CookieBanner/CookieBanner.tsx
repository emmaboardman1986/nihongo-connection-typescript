import React, { useState, useEffect, useContext } from "react"
import { StyledCookieBanner } from "./CookieBannerStyles"
import Button from "../Button"
import VerticalSpacing from "../VerticalSpacing"
import FlexContainer from "../FlexContainer"
import { useSetCookies } from "../../customHooks/useSetCookie"
import { useGetCookie } from "../../customHooks/useGetCookie"

const CookieBanner = () => {
  const [hideCookieBanner, setHideCookieBanner] = useState(true)

  useEffect(() => {
    let isCookiePolicyPage =
      window.location.href.indexOf("cookie-policy") > -1 ? true : false
    let essentialCookiesAccepted = useGetCookie("acceptEssentialCookies")
    setHideCookieBanner(essentialCookiesAccepted || isCookiePolicyPage)
  }, [])

  return (
    <>
      {!hideCookieBanner && (
        <StyledCookieBanner>
          <p>
            Nihongo Connection uses essential cookies to power our community
            sign-up form.
            <br></br>We also use analytics cookies to track page views. This
            helps us understand how we can improve our website.
          </p>
          <VerticalSpacing></VerticalSpacing>
          <FlexContainer
            justifyContent={{ _: "center" }}
            alignItems={{ _: "center" }}
            flexWrap
          >
            <Button
              isAction
              onClick={() => {
                useSetCookies("acceptEssentialCookies", true)
                setHideCookieBanner(true)
              }}
            >
              Accept essential cookies
            </Button>
            <Button
              isAction
              onClick={() => {
                useSetCookies("acceptEssentialCookies", "true")
                useSetCookies("acceptTrackingCookies", "true")
                setHideCookieBanner(true)
              }}
              margins={{ left: "1rem", right: "1rem" }}
            >
              Accept analytics cookies
            </Button>
            <Button variant="secondary" link="/cookie-policy">
              Read cookie policy
            </Button>
          </FlexContainer>
        </StyledCookieBanner>
      )}
    </>
  )
}

export default CookieBanner
