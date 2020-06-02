import { css } from "styled-components";
import { setSpacing, setFlex, setFlexDirection, breakpoint } from "../../styles/styleHelpers"

export const HeroWrapperStyles = css`
${setFlex()};
${setFlexDirection({ direction: "column" })};
flex-wrap: wrap;
${breakpoint.sm`
max-width: 950px;
${setFlex({ justify: "space-between" })};
${setFlexDirection({ direction: "row-reverse" })};
margin-top: ${setSpacing.xLoose};

`}
`

export const HeroContentStyles = css`
${breakpoint.sm`
width: 60%`}`

export const HeroImageStyles = css`
img {
    transform: rotate(-90deg);
    width: 110px;
    ${breakpoint.sm`
    width: 210px;
    `}
}
`