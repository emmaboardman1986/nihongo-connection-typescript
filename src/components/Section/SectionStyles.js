import styled from "styled-components"
import { setSpacing, breakpoint } from "../../styles/styleHelpers"

export const StyledSection = styled.section`
  padding: ${setSpacing.base} ${setSpacing.loose};
  ${breakpoint.xs`
  padding: ${setSpacing.xLoose};`}
  ${breakpoint.md`
  ${props =>
    props.bgImg &&
    `background: url(${props.bgImg}) no-repeat 6% 0%; background-size: auto 30%;`}`}
`
