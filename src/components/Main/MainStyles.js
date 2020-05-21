import { css } from "styled-components"
import { breakpoint } from "../../styles/styleHelpers"

export const MainStyles = css`
  margin-top: 65px;
  ${breakpoint.md`
  margin-top: 0;`}
`
