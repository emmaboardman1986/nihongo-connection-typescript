import {css} from 'styled-components'
import { setFont, setColor, setSpacing, setFlex } from '../../styles/styleHelpers'


export const HeaderStyles = css`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${setColor.brandMonochrome[0]};
  z-index: 10;
  padding: ${setSpacing.loose};
  height: 70px;
  box-sizing: border-box;
  ${setFlex({justify: "center"})};`

export const HeaderLogoStyles = css`
  font-family: ${setFont.fontSecondaryBlack};
  font-size: 1.2rem;
  color: ${setColor.brandSecondary[500]};
`