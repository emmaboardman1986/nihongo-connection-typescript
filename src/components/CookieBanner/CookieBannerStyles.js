import styled, { css } from "styled-components"
import {
  setColor,
  setFont,
  setFontSize,
  setSpacing,
  breakpoint,
} from "../../styles/styleHelpers"

const CookieBannerStyles = css`
  position: fixed;
  width: calc(100% - calc(${setSpacing.loose} * 2));
  bottom: 0;
  background-color: ${setColor.brandPrimary[500]};
  p {
    font-family: ${setFont.fontPrimaryRegular};
    font-size: ${setFontSize.medium};
    color: ${setColor.brandMonochrome[0]};
  }

  padding: ${setSpacing.loose};
  text-align: center;
  line-height: ${setFontSize.x4Large};
  z-index: 99;
  ${props => props.hide && `display: none;`}
  > div {
    color: red;
    button:last-of-type + div {
      margin-top: 0.5rem;
      ${breakpoint.sm`
      margin-top: 0;`}
    }
  }
`
export const StyledCookieBanner = styled.div`
  ${CookieBannerStyles};
`
