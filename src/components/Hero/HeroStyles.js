import { css } from "styled-components";
import { setSpacing, setFlex, setFlexDirection, breakpoint } from "../../styles/styleHelpers"

export const HeroWrapperStyles = css`
${setFlex()};
${setFlexDirection({ direction: "column" })};
flex-wrap: wrap;
${breakpoint.sm`
${setFlex({ justify: "space-between" })};
${setFlexDirection({ direction: "row-reverse" })};
margin-top: ${setSpacing.xLoose};

`}
`

export const HeroContentStyles = css``

export const HeroImageStyles = css`
img {
    width: 110px;
    ${breakpoint.sm`
    width: 210px;
    `}
}
`