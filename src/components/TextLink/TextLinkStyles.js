import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { setColor, setFont } from "../../styles/styleHelpers"

const TextLinkOnBrandBgStyles = css`
color: ${setColor.brandMonochrome[0]};
  &:hover {
    color: ${setColor.brandMonochrome[800]};
    background-color: ${setColor.brandMonochrome[0]};
  }`

const TextLinkWrapperStyles = css`
  display: inline;
  font-family: ${setFont.fontPrimaryMedium};
  color: inherit;
  &:hover {
    color: ${setColor.brandMonochrome[0]};
    background-color: ${setColor.brandPrimary[600]};
  }
  ${props => props.isOnBrandBg && TextLinkOnBrandBgStyles};`

export const StyledExternalTextLink = styled.a`
${TextLinkWrapperStyles};
`
export const StyledInternalTextLink = styled(Link)`
${TextLinkWrapperStyles};
`