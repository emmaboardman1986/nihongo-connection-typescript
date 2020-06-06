import styled, { css } from "styled-components"
import { setFlex, setColor, setFontSize, setFont } from "../../../styles/styleHelpers"
import { BodyTextStyles } from "../../typography/BodyText/BodyTextStyles"


const FilterGroupStyles = css`
border: 0;
`

const FilterGroupContentStyles = css`
${setFlex({justify: "flex-start"})};
flex-wrap: wrap;
`

const FilterGroupTitleStyles = css`
 ${BodyTextStyles};
 color: ${setColor.brandMonochrome[700]};
 font-size: ${setFontSize.small};
 font-family: ${setFont.fontPrimaryMedium};
`

export const StyledFilterGroup = styled.fieldset`
  ${FilterGroupStyles};
`

export const StyledFilterGroupContents = styled.ul`
  ${FilterGroupContentStyles};
`

export const StyledFilterGroupTitle = styled.legend`
  ${FilterGroupTitleStyles};
`
