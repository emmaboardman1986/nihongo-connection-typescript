import styled, { css } from "styled-components"
import { setSpacing, breakpoint } from "../../styles/styleHelpers"

export const StyledSection = styled.section`
 padding: ${setSpacing.base} ${setSpacing.loose} ;
  ${breakpoint.xs`
  padding: ${setSpacing.xLoose};`}
`

