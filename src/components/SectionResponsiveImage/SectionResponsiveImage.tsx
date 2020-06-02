import React from "react"
import styled from "styled-components"
import { SectionResponsiveImageStyles } from "./SectionResponsiveImageStyles"
import { breakpoints } from "../../styles/styleHelpers"

// export interface SectionResponsiveImageProps {
//   imgObj: {}
// }

const SectionResponsiveImage = ({ imgObj, applyFilter=false, desktopWidth }) => {
  return (
    <SectionResponsiveImageWrapper applyFilter={applyFilter} desktopWidth={desktopWidth}>
      <picture>
        <source media={`min-width: ${breakpoints.md}`} srcSet={imgObj.url} />
        <img src={imgObj.thumbnails.Tablet.url} alt={imgObj.alt} />
      </picture>
    </SectionResponsiveImageWrapper>
  )
}

const SectionResponsiveImageWrapper = styled.div`
  ${SectionResponsiveImageStyles};
`

export default SectionResponsiveImage
