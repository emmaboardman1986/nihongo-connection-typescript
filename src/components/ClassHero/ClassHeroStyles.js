import styled, { css} from "styled-components"
import { setFlex, setFlexDirection, breakpoint } from "../../styles/styleHelpers"

export const StyledClassHero = styled.div`
width: 100%;
${setFlex()};
${setFlexDirection({direction: "column"})}
${breakpoint.sm`
position: relative;
`}
`

export const StyledClassHeroTitle = styled.div`
`

export const StyledClassHeroImage = styled.div`
${breakpoint.sm`
${setFlex({justify: "center"})};
position: absolute;
top: 0;
right: 0;
`}
`

export const StyledClassHeroSummary = styled.div`

`