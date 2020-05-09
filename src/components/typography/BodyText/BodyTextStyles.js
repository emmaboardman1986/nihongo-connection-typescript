import { css } from "styled-components"
import { setFont, setColor, setMargin } from "../../../styles/styleHelpers"

export const BodyTextStyles = css`
  font-family: ${setFont.fontPrimaryRegular};
  font-size: 1rem;
  line-height: 1.4rem;
  color: ${setColor.brandBlack};
  p {
    margin-top: ${setMargin.bodyTextMargin};
    &:last-of-type {
      margin-bottom: ${setMargin.bodyTextMargin};
    }
  }
`

