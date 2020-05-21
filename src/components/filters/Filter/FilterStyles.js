import { css } from "styled-components"
import { setFlex, setColor, setFontSize } from "../../../styles/styleHelpers"
import { BodyTextStyles } from "../../typography/BodyText/BodyTextStyles"

export const FilterStyles = css`


`

export const FilterGroupStyles = css`
border: 0;
 
`

export const FilterGroupContentStyles = css`
${setFlex({justify: "flex-start"})};
flex-wrap: wrap;
 
`

export const FilterGroupTitleStyles = css`
 ${BodyTextStyles};
 color: ${setColor.brandMonochrome[700]};
 font-size: ${setFontSize.small};

`

