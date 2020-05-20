import { css } from 'styled-components'
import { setFont, setColor, setSpacing, setFlex, breakpoint, setHeight } from '../../styles/styleHelpers'


export const HeaderStyles = css`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${setColor.brandSecondary[400]};
  z-index: 10;
  padding: ${setSpacing.loose};
  height: ${setHeight.navHeight};
  box-sizing: border-box;
  ${setFlex({ align: "center", justify: "center" })};
  ${breakpoint.md`
  background-color: ${setColor.brandMonochrome[0]};
  ${setFlex({ justify: "flex-start" })};
  `}`


export const HeaderLogoStyles = css`
a {
  z-index: 99;
  text-decoration: none;
  font-family: ${setFont.fontSecondaryBlack};
  font-size: 1.2rem;
  color: ${setColor.brandMonochrome[0]};
  margin-left: ${setSpacing.loose};
  ${breakpoint.md`
  color: ${setColor.brandMonochrome[900]};
  margin-left: 0;
  `}
}
  
`