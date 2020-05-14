import { css } from "styled-components"
import { BodyTextStyles } from "../typography/BodyText/BodyTextStyles"
import { setColor, setFlex, setBorder, setFont, setFontSize, setShadow } from "../../styles/styleHelpers"

export const PillStyles = css`
  ${BodyTextStyles};
  font-family: ${setFont.fontSecondaryBlack};
  color: ${setColor.brandMonochrome[900]};
  font-size: ${setFontSize.medium};
  background-color: ${setColor.brandMonochrome[0]};
  min-height: 44px;
  box-shadow: ${setShadow.elevate[0]};
  border-radius: calc(${setBorder.borderRadius} * 2.5);
  width: 160px;
  border: 2px solid ${setColor.brandPrimary[900]};
  ${props =>
    props.alignCenter ? "margin-left: auto; margin-right: auto;" : null};
  ${setFlex({ align: "center", justify: "center" })};
  a {
    text-decoration: none;
  }
  &[aria-pressed="true"] {
  color: ${setColor.brandMonochrome[0]};
  font-size: ${setFontSize.medium};
  background-color: ${setColor.brandPrimary[400]};
}
`
