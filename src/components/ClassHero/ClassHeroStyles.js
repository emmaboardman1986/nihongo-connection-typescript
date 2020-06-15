import styled from "styled-components"
import { setFlex, setFlexDirection, breakpoint, setColor } from "../../styles/styleHelpers"

export const StyledClassHero = styled.div`
width: 100%;
${setFlex()};
${setFlexDirection({direction: "column"})}
${breakpoint.sm`
position: relative;
`}
`

export const StyledClassHeroTitle = styled.div`
h1 {
    color: ${setColor.brandPrimary[700]};
}
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