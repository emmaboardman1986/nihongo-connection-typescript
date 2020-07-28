import styled, { css } from "styled-components"
import { BodyTextStyles } from "../BodyText/BodyTextStyles"
import {
  setColor,
  setFlex,
  setFontSize,
  setFont,
  setBorder,
} from "../../styles/styleHelpers"
import { BrandWarn } from "../../../static/brandwarn.svg"
import { BrandTick } from "../../../static/brandtick.svg"

const ButtonStyles = css`
  ${BodyTextStyles};
  font-family: ${setFont.fontPrimaryMedium};
  background-color: ${setColor.brandSecondary[500]};
  min-height: 44px;
  border-radius: ${setBorder.borderRadius};
  width: 160px;
  border: 2px solid transparent;
  margin-top: ${props => (props.margins && props.margins.top) || "0"};
  margin-bottom: ${props => (props.margins && props.margins.bottom) || "0"};
  margin-left: ${props => (props.margins && props.margins.left) || "0"};
  margin-right: ${props => (props.margins && props.margins.right) || "0"};

  ${props =>
    props.alignCenter ? "margin-left: auto; margin-right: auto;" : null};
  ${setFlex({ align: "center", justify: "center" })};
  a {
    text-decoration: none;
    color: ${setColor.brandMonochrome[0]};
  }
  &:hover {
    background-color: ${setColor.brandSecondary[600]};
  }
`

const SecondaryButtonStyles = css`
  background-color: ${setColor.brandPrimary[600]};
  border: 2px solid ${setColor.brandPrimary[600]};
  &:hover {
    background-color: ${setColor.brandPrimary[700]};
  }
  a {
    color: ${setColor.brandMonochrome[0]};
  }
`

export const ActionButtonFocusStyles = css`
  outline: 0;
  box-shadow: 0 0 0 3px ${setColor.brandPrimary[300]};
`

const ActionButtonStyles = css`
  &:after {
    content: "${props => props.name}";
    margin-top: 3px;
  }
  font-family: ${setFont.fontSecondaryBlack};
  font-size: ${setFontSize.medium};
  background-color: ${setColor.brandMonochrome[0]};
  border: ${setBorder.borderSmBlack};
  a, span {
    color: ${setColor.brandMonochrome[900]};
  }
  &:hover {
    background-color: ${setColor.brandPrimary[200]};
    border: ${setColor.borderSmBlack};
  }
  &:focus {
    ${ActionButtonFocusStyles};
  }
 
  transition: all 0.15s ease;
  position: relative;

  &.success {
  &:after {
    content: " ";
    width: 30px;
    height: 30px;
    background-image: url(${BrandTick});
    background-size: cover;
  }
  }
  &.error {
  &:after {
    content: " ";
    width: 30px;
    height: 30px;
    background-image: url(${BrandWarn});
    background-size: cover;
  }
  }
`

export const StyledActionButton = styled.button`
  ${ButtonStyles};
  ${ActionButtonStyles};
`

export const StyledLinkButton = styled.div`
  ${ButtonStyles};
  ${props => props.variant === "secondary" && SecondaryButtonStyles};
  margin-left: ${props => (props.isCentered ? "auto" : null)};
  margin-right: ${props => (props.isCentered ? "auto" : null)};
`
