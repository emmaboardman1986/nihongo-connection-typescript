import { css } from "styled-components"
import { BodyTextStyles } from "../typography/BodyText/BodyTextStyles"
import { setColor, setFlex, setBorder } from "../../styles/styleHelpers"
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
  background-color: ${setColor.brandWhite};
  border: 2px solid ${setColor.brandBlack};
  a, span {
    color: ${setColor.brandBlack};
  }
  &:hover {
    background-color: ${setColor.brandWhiteOffset};
    border: 2px solid ${setColor.brandPrimary};
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
  border-left-color: ${setColor.brandPrimary};
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