import { css } from "styled-components"
import { BodyTextStyles } from "../typography/BodyText/BodyTextStyles"
import { setColor, setFlex, setFontSize, setFont, setBorder } from "../../styles/styleHelpers"
import { BrandWarn } from "../../../static/brandwarn.svg"
import { BrandTick } from "../../../static/brandtick.svg"

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

export const ActionButtonStyles = css`
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
    background-color: ${setColor.brandPrimary[100]};
    border: ${setColor.borderSmBlack};
  }
  /* Remove Later */
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: all 0.15s ease;
  position: relative;
  &.on-click {
  width: 44px;
  border-radius: 50%;
  border-left-color: ${setColor.brandPrimary[600]};
  animation: rotating 2s 0.25s linear infinite;
    &:after {
      content: "";
      
    }
  }
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
  @keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`