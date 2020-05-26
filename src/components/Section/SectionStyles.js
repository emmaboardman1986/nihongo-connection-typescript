import { css } from "styled-components"
import { setSpacing, breakpoint } from "../../styles/styleHelpers"

export const SectionStyles = css`
  padding: ${setSpacing.base} ${setSpacing.loose} ;
  ${breakpoint.xs`
  padding: ${setSpacing.xLoose};`}
  
`
