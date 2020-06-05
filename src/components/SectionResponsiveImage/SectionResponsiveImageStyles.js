import styled, { css } from "styled-components"
import { setBorder, breakpoint } from "../../styles/styleHelpers"

const SectionResponsiveImageStyles = css`
width: 100%;
${breakpoint.sm`
width: ${props => props.desktopWidth ? props.desktopWidth : '40%'} `}
img {
    width: 100%;
    border-radius: ${setBorder.borderRadius};
    border: ${setBorder.borderSmPrimary};
    ${props => props.applyFilter && "filter: saturate(1) brightness(1) contrast(2)"};
}
`

export const StyledSectionResponsiveImage = styled.div`
  ${SectionResponsiveImageStyles};
`