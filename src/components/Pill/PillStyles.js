import styled, { css } from "styled-components"
import { BodyTextStyles } from "../typography/BodyText/BodyTextStyles"
import { setColor, setFlex, setBorder, setFont, setFontSize, setShadow, setSpacing } from "../../styles/styleHelpers"
import {ActionButtonFocusStyles } from "../Button/ButtonStyles"

const PillStyles = css`
  ${BodyTextStyles};
  font-family: ${setFont.fontSecondaryBlack};
  color: ${setColor.brandMonochrome[900]};
  font-size: ${setFontSize.medium};
  background-color: ${setColor.brandMonochrome[0]};
  min-height: 55px;
  box-shadow: ${setShadow.elevate[0]};
  border-radius: calc(${setBorder.borderRadius} * 2.5);
  width: 144px;
  border: 2px solid ${setColor.brandPrimary[900]};
  margin-top: ${setSpacing.tight};
  margin-bottom: ${setSpacing.xTight};
  margin-right: ${setSpacing.baseTight};
  ${setFlex({ align: "center", justify: "center" })};
    &[aria-pressed="true"] {
      color: ${setColor.brandMonochrome[0]};
      font-size: ${setFontSize.medium};
      background-color: ${setColor.brandSecondary[400]};
      &:hover {
        background-color: ${setColor.brandSecondary[600]};
      }
  }
    &:hover {
      background-color: ${setColor.brandSecondary[100]};
      cursor: pointer;
    }
    &:focus {
      ${ActionButtonFocusStyles};
    }
`

export const StyledPill = styled.button`
  ${PillStyles}
`

