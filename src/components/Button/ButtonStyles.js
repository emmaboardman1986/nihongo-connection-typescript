import { css } from "styled-components"
import { BodyTextStyles } from "../typography/BodyText/BodyTextStyles"
import { setColor, setFlex, setBorder } from "../../styles/styleHelpers"

export const ButtonStyles = css`
  ${BodyTextStyles};
  background-color: ${setColor.brandSecondary[400]};
  min-height: 44px;
  border-radius: ${setBorder.borderRadius};
  width: 160px;
  border: ${setBorder.borderSmBlack};
  ${props =>
    props.alignCenter ? "margin-left: auto; margin-right: auto;" : null};
  ${setFlex({ align: "center", justify: "center" })};
  a {
    margin-top: 3px;
    ${'' /* // correct Poppins Y offset */}
    text-decoration: none;
    color: ${setColor.brandMonochrome[0]};
  }
`

export const SecondaryButtonStyles = css`
  background-color: ${setColor.brandPrimary[600]};
  border: 2px solid ${setColor.brandPrimary[600]};
  a {
    color: ${setColor.brandMonochrome[0]};
  }
`
