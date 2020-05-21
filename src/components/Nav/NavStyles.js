import { css } from 'styled-components'
import { setColor, setFont, setSpacing, breakpoint, setFlex, setFlexDirection, setBorder, setFontSize, setHeight } from "../../styles/styleHelpers"

export const NavWrapperStyles = css`
position: absolute;
top: ${setHeight.navHeight};
left: 0;
width: 100%;
background-color: transparent;
 a {
     color: ${setColor.brandMonochrome[0]};
     font-family: ${setFont.fontPrimaryMedium};
 }
 ${breakpoint.sm`
 position: relative;
 top: initial;
 left: initial;
 `}
`

export const NavListGroupWrapperStyles = css`
display: ${props => props.isMenuExpanded === true ? "none" : null};
background-color: ${setColor.brandMonochrome[0]};
height: calc(100vh - ${setHeight.navHeight});
overflow-y: scroll;
 ul {
  display: none;
}
${breakpoint.sm`
display: flex;
justify-content: flex-end;
background-color: transparent;
`}
`

export const NavListItemWrapperStyles = css`
padding: ${setSpacing.loose};
list-style: none;
border-top: ${setBorder.borderSmBlack};
background-color: ${setColor.brandMonochrome[0]};
a {
    padding: ${setSpacing.base} 0;
    text-decoration: none;
    font-size: ${setFontSize.large};
    color: ${setColor.brandPrimary[900]};
}
${breakpoint.sm`
margin: 0 ${setSpacing.baseTight};
border-top: none;
background-color: transparent;
padding: 0;
a {
  font-size: ${setFontSize.medium};
}
`}
`


export const NavListItemHasChildStyles = css`
position: relative;
list-style: none;
a {
    position:relative;
&:after {
    position: absolute;
    top: calc(50% - 5px);
    content: "";
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid ${setColor.brandPrimary[900]};
    margin-left: ${setSpacing.tight};
    transition: transform .1s;
    }
    &[aria-expanded="true"]{
        &:after {
            transform: rotate(180deg);
        }
    }
}
ul {
    display: ${props => props.isDropDownExpanded === false ? "none" : "flex"};
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    overflow-y: initial;
    background-color: ${setColor.brandPrimary[100]};
    margin-left: ${setSpacing.loose};
    margin-top: ${setSpacing.tight};
    li {
        padding: ${setSpacing.tight};
        border: 0;
        a {
            font-family: ${setFont.fontPrimaryRegular};
            font-size: ${setFontSize.medium};
            &:after {
                display: none;
            }
        }
    }
}
${breakpoint.sm`
a {
  &:after {
    margin-left: ${setSpacing.xTight};
  }
  &[aria-expanded="true"]{
        &:after {
            transform: rotate(180deg);
        }
    }
}
margin-right: ${setSpacing.xLoose};
ul {
  position: absolute;
  top: 1.5rem;
  width: 100%;
  justify-content: flex-start;
  height: 70vh;
    background-color: ${setColor.brandPrimary[600]};
    a {
      color: white;
    }
  
}
`}
`

export const BurgerButtonWrapperStyles = css`
  position: absolute;
  top: -${setHeight.navHeight};
  left: calc(${setSpacing.loose} - 10px);
  justify-self: flex-start;
  background-color: transparent;
  height: ${setHeight.navHeight};
  border: 0;
  box-sizing: border-box;
  div {
      width: 60px;
  }
  div span {
    display: block;
    height: 6px;
    width: 40px;
    background: ${setColor.brandMonochrome[0]};
    border-radius: 9px;
    opacity: 1;
    transition: 0.25s ease-in-out;
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${setColor.brandPrimary[300]};
  }
  &[aria-expanded="true"] {
    div span {
      :nth-child(1) {
        transform: rotate(-45deg) translateY(9px) translateX(-10px);
      }
      :nth-child(2) {
        opacity: 0;
      }
      :nth-child(3) {
     
        transform: rotate(45deg) translateY(-9px) translateX(-10px);
      }
    }
  }
  ${breakpoint.md`
    display: none;`}
`

export const BurgerButtonSpanWrapperStyles = css`
 ${setFlex({ align: "center", justify: "space-evenly" })};
  ${setFlexDirection({ direction: "column" })}
height: 45px;
`


