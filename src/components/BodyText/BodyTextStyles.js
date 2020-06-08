import styled, { css } from "styled-components"
import { setFont, setFontSize, setColor, setSpacing } from "../../styles/styleHelpers"

export const BodyTextStyles = css`
  font-family: ${setFont.fontPrimaryRegular};
  font-size: ${setFontSize.standard};
  line-height: 1.6rem;
  letter-spacing: 0.01rem;
  color: ${setColor.brandMonochrome[800]};
  p:not(:first-of-type) {
    margin-top: ${setSpacing.baseTight};
  }
`

export const StyledBodyText = styled.p`
  ${BodyTextStyles};
`
