import { css } from "styled-components"
import { setFont, setFontSize, setColor, setMargin } from "../../../styles/styleHelpers"

export const BodyTextStyles = css`
  font-family: ${setFont.fontPrimaryRegular};
  font-size: ${setFontSize.standard};
  line-height: 1.4rem;
  color: ${setColor.brandBlack};
  p:not(:first-of-type) {
    margin-top: ${setMargin.bodyTextMargin};
  }
`
