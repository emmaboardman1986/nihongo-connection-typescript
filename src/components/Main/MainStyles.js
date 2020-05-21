import { css } from "styled-components"
import { setSpacing, breakpoint } from "../../styles/styleHelpers"

export const MainStyles = css`
  margin-top: 65px;
  ${breakpoint.sm`
  margin-top: 0;`}
`
