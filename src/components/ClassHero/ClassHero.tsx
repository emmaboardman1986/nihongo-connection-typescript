import React from "react"
import {
  StyledClassHero,
  StyledClassHeroImage,
  StyledClassHeroTitle,
  StyledClassHeroSummary,
} from "./ClassHeroStyles"
import HighlightPill from "../HighlightPill"
import SectionResponsiveImage from "../SectionResponsiveImage"
import Heading from "../Heading"
import BodyText from "../BodyText"
import RichText from "../RichText"
import VerticalSpacing from "../VerticalSpacing"

const ClassHero = ({ title, duration, location, image, summary }) => {
  return (
    <StyledClassHero>
      <StyledClassHeroTitle>
        <Heading element="h1">{title}</Heading>
        <VerticalSpacing size={{ _: "tight" }}></VerticalSpacing>

        <BodyText>
          {duration && <HighlightPill>{duration}</HighlightPill>}{" "}
          {location && <HighlightPill>{location}</HighlightPill>}
        </BodyText>
        <VerticalSpacing size={{ _: "xLoose" }}></VerticalSpacing>
      </StyledClassHeroTitle>

      {image.thumbnails.Tablet.url && (
        <StyledClassHeroImage>
          <SectionResponsiveImage
            imgObj={image}
            applyFilter
            desktopWidth="60%"
          ></SectionResponsiveImage>
        </StyledClassHeroImage>
      )}
      <VerticalSpacing size={{ _: "base" }}></VerticalSpacing>

      <StyledClassHeroSummary>
        <RichText content={summary} emphasiseText></RichText>
      </StyledClassHeroSummary>
    </StyledClassHero>
  )
}

export default ClassHero
