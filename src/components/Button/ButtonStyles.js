import { css } from "styled-components"
import { BodyTextStyles } from "../typography/BodyText/BodyTextStyles"
import { setColor, setFlex, setBorder } from "../../styles/styleHelpers"

export const ButtonStyles = css`
  ${BodyTextStyles};
  background-color: ${setColor.brandPrimary[400]};
  min-height: 44px;
  border-radius: ${setBorder.borderRadius};
  width: 160px;
  border: 2px solid ${setColor.brandPrimary[400]};
  ${props =>
    props.alignCenter ? "margin-left: auto; margin-right: auto;" : null};
  ${setFlex({ align: "center", justify: "center" })};
  a {
    text-decoration: none;
    color: ${setColor.brandMonochrome[0]};
  }
`

export const SecondaryButtonStyles = css`
  background-color: ${setColor.brandPrimary[200]};
  border: 2px solid ${setColor.brandPrimary[800]};
  a {
    color: ${setColor.brandPrimary[800]};
  }
`
