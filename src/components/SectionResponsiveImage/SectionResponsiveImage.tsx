import React from "react"
import { StyledSectionResponsiveImage } from "./SectionResponsiveImageStyles"
import { breakpoints } from "../../styles/styleHelpers"

export interface SectionResponsiveImageProps {
  imgObj: {
    url: string
    alt: string
    thumbnails: {
      Tablet: {
        url: string
      }
      thumbnail: {
        url: string
      }
    }
  }
  applyFilter?: boolean
  desktopWidth?: string
}

const SectionResponsiveImage = ({
  imgObj,
  applyFilter = false,
  desktopWidth,
}: SectionResponsiveImageProps) => {
  return (
    <StyledSectionResponsiveImage
      applyFilter={applyFilter}
      desktopWidth={desktopWidth}
    >
      <picture>
        <source media={`min-width: ${breakpoints.md}`} srcSet={imgObj.url} />
        <img src={imgObj.thumbnails.Tablet.url} alt={imgObj.alt} />
      </picture>
    </StyledSectionResponsiveImage>
  )
}


export default SectionResponsiveImage
