import React from "react"
import { StyledHero, StyledHeroContent, StyledHeroImage } from "./HeroStyles"
import Logo from "../../../static/logo.svg"
import VerticalSpacing from "../VerticalSpacing"

const Hero = ({ children }) => {
  return (
    <StyledHero>
      <StyledHeroImage>
        <img src={Logo} alt="Nihongo Connection"></img>
      </StyledHeroImage>
      <VerticalSpacing size={{ _: "loose", sm: "xxLoose" }}></VerticalSpacing>
      <StyledHeroContent>{children}</StyledHeroContent>
    </StyledHero>
  )
}

export default Hero
