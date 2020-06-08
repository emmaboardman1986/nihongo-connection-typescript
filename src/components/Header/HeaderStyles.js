import styled, { css } from 'styled-components'
import { setFont, setColor, setSpacing, setFlex, setFlexDirection, breakpoint, setHeight } from '../../styles/styleHelpers'


export const HeaderStyles = css`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${setColor.brandSecondary[500]};
  z-index: 10;
  padding: ${setSpacing.loose};
  height: ${setHeight.navHeight};
  box-sizing: border-box;
  ${setFlex({ align: "center", justify: "center" })};
  ${breakpoint.md`
  padding: ${setSpacing.baseLoose};
  position: relative;
  top: initial;
  left: initial;
  background-color: ${setColor.brandMonochrome[0]};
  ${setFlexDirection({ direction: "row-reverse" })};
  ${setFlex({ justify: "flex-start" })};
  `}`


export const HeaderLogoStyles = css`
 ${breakpoint.md`
  width: 300px;
  `}
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

export const StyledHeader = styled.header`
  ${HeaderStyles};
`

export const StyledHeaderLogo = styled.p`
 ${HeaderLogoStyles};
`