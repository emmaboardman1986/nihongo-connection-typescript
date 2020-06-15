import styled, { css } from "styled-components"
import { setColor, setSpacing, setBorder, setFontSize } from "../../styles/styleHelpers"
import { BodyTextStyles } from "../BodyText/BodyTextStyles"
import {ActionButtonFocusStyles } from "../Button/ButtonStyles"

const HighlightPillStyles = css`
  ${BodyTextStyles};
  font-size: ${setFontSize.small};
  background-color: ${props => props.bgColor ? props.bgColor : setColor.brandMonochrome[900]};
  border: ${props => props.color ? `1px ${props.color} solid` : null};
  color:  ${props => props.color ? props.color : setColor.brandMonochrome[0]};
  border-radius: calc(${setBorder.borderRadius} / 2);
  margin-right: ${setSpacing.xTight};
  padding: ${setSpacing.tight} ${setSpacing.base};
  white-space: nowrap;
  line-height: 1rem;
`

export const StyledHighlightPillButton = styled.button`
  ${HighlightPillStyles}
  border: 0;
  &:hover {
    background-color: ${setColor.brandPrimary[700]};
    cursor: pointer;
  }
   &:focus {
      ${ActionButtonFocusStyles};
  }
`

export const StyledHighlightPillInfo = styled.span`
  ${HighlightPillStyles};
`