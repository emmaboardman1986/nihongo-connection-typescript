import { css } from "styled-components"
import { BodyTextStyles } from "../typography/BodyText/BodyTextStyles"
import { setColor, setFlex, setBorder } from "../../styles/styleHelpers"

export const ButtonStyles = css`
  ${BodyTextStyles};
  background-color: ${setColor.brandGrey};
  min-height: 44px;
  border-radius: 16px;
  width: 160px;
  border: ${setBorder.borderSmTransparent};
  ${props =>
    props.alignCenter ? "margin-left: auto; margin-right: auto;" : null};
  ${setFlex({ align: "center", justify: "center" })};
  a {
    text-decoration: none;
    color: ${setColor.brandWhite};
  }
`

export const SecondaryButtonStyles = css`
  background-color: ${setColor.brandWhite};
  border: ${setBorder.borderSmBlack};
  a {
    color: ${setColor.brandBlack};
  }
`
