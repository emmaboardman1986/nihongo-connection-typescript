import React from "react"
import styled from "styled-components"
import {
  HeroContentStyles,
  HeroWrapperStyles,
  HeroImageStyles,
} from "./HeroStyles"
import  Logo from "../../../static/logo.svg"
import VerticalSpacing from "../utilities/VerticalSpacing"

const Hero = ({ children }) => {
  return (
    <HeroWrapper>
      <VerticalSpacing size={{_: "baseTight", sm: "xxLoose"}}></VerticalSpacing>
        <HeroImage>
        <img src={Logo}></img>
      </HeroImage>
      <VerticalSpacing size={{_: "loose", sm: "xxLoose"}}></VerticalSpacing>
      <HeroContent>
      {children}
      </HeroContent>
    
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  ${HeroWrapperStyles};
`

const HeroContent = styled.div`
  ${HeroContentStyles};
`

const HeroImage = styled.div`
  ${HeroImageStyles};
`

export default Hero
