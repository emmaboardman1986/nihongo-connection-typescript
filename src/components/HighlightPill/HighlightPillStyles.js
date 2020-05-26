import { css } from "styled-components"
import { setColor, setSpacing, setBorder, setFontSize } from "../../styles/styleHelpers"
import { BodyTextStyles } from "../typography/BodyText/BodyTextStyles"

export const HighlightPillStyles = css`
  ${BodyTextStyles};
  font-size: ${setFontSize.small};
  background-color: ${setColor.brandMonochrome[900]};
  color:  ${setColor.brandMonochrome[0]};
  border-radius: calc(${setBorder.borderRadius} / 2);
  margin-right: ${setSpacing.xTight};
  padding: ${setSpacing.tight} ${setSpacing.base};
  white-space: nowrap;
  line-height: 1rem;
`