import { css } from "styled-components"
import { setBorder, breakpoint, setSpacing } from "../../styles/styleHelpers"

export const SectionResponsiveImageStyles = css`
width: 100%;
${breakpoint.sm`
    width: 40%;`}
img {
    width: 100%;
    border-radius: ${setBorder.borderRadius};
    border: ${setBorder.borderSmPrimary};
    ${props => props.applyFilter && "filter: saturate(1) brightness(1) contrast(2)"};
    ${breakpoint.sm`
    margin: 0 ${setSpacing.base};`}
  
}
`
