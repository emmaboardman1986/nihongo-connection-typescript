import React from "react"
import 'lazysizes';
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
        <source media={`min-width: ${breakpoints.md}`} srcSet={imgObj.url}/>
        <img data-src={imgObj.thumbnails.Tablet.url} alt="" className="lazyload" />
      </picture>
    </StyledSectionResponsiveImage>
  )
}


export default SectionResponsiveImage
