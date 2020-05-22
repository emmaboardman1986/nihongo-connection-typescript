import { css } from "styled-components"
import { setColor, setFont } from "../../styles/styleHelpers"

export const TextLinkOnBrandBgStyles = css`
color: ${setColor.brandMonochrome[0]};
  &:hover {
    color: ${setColor.brandMonochrome[800]};
    background-color: ${setColor.brandMonochrome[0]};
  }`

export const TextLinkWrapperStyles = css`
  display: inline;
  font-family: ${setFont.fontPrimaryMedium};
  color: ${setColor.brandPrimary[600]};
  &:hover {
    color: ${setColor.brandMonochrome[800]};
    background-color: ${setColor.brandPrimary[600]};
  }
  ${props => props.isOnBrandBg && TextLinkOnBrandBgStyles};`