import { css } from 'styled-components'
import { setColor, setFont, setSpacing } from "../../styles/styleHelpers"

export const NavWrapperStyles = css`
position: absolute;
top: 70px;
left: 0;
width: 100%;
height: calc(100vh - 70px);
background-color: ${setColor.brandPrimary[500]};
 a {
     color: ${setColor.brandMonochrome[0]};
     font-family: ${setFont.fontPrimaryMedium};
 }
`

export const NavListGroupWrapperStyles = css`
padding: ${setSpacing.loose};
`

export const NavListItemWrapperStyles = css`
list-style: none;`


export const NavListItemHasChildStyles = css`
background-color: yellow;
list-style: none;
ul {
    background-color: orange;
}
`


