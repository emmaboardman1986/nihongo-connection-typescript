import { css } from "styled-components"
import { BodyTextStyles } from "../typography/BodyText/BodyTextStyles"
import { setColor, setFlex } from "../../styles/styleHelpers"

export const ButtonStyles = css`
  ${BodyTextStyles};
  background-color: ${setColor.brandGrey};
  min-height: 44px;
  border-radius: 16px;
  width: 160px;
  ${setFlex()};
  a {
      text-decoration: none;
      color: ${setColor.brandWhite};
  }
`
