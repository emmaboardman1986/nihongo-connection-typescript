import { css } from "styled-components"
import { setColor, setBorder, setSpacing, setShadow, setFontSize, setFlex, setFont } from "../../styles/styleHelpers"
import { H3Styles } from "../typography/Heading/HeadingStyles"

export const AccordionWrapperStyles = css`
  width: 100%;
`
export const AccordionMainStyles = css`
  border-radius: ${setBorder.borderRadius};
  border: ${setBorder.borderSmPrimary};
  margin: ${setSpacing.base} 0;

`

export const AccordionToggleStyles = css`
font-family: ${setFont.fontPrimaryMedium};
font-size: ${setFontSize.small};
border-radius: calc(${setBorder.borderRadius} / 2);
  border: ${setBorder.borderSmPrimary};
  box-shadow: ${setShadow.elevate[100]};
  transition: box-shadow .1s ease-in;
  margin-bottom: ${setSpacing.xTight};
  margin-right: ${setSpacing.tight};
  padding: ${setSpacing.tight} ${setSpacing.baseTight};
  background-color: ${setColor.brandMonochrome[0]};
  min-width: 120px;
  &.pressed-in {
    ${'' /* box-shadow: ${setShadow.depress[100]}; */}
    transform: translate(2px, 10%);
  }
`

export const AccordionSectionWrapperStyles = css`
    background-color: ${props =>
        props.expanded ? setColor.brandPrimary[700] : setColor.brandMonochrome[0]};
    &:first-of-type {
      border-radius: calc(${setBorder.borderRadius} / 2);
    }`

export const AccordionContentWrapperStyles = css`
    padding: ${setSpacing.baseTight};
    padding-bottom: ${setSpacing.loose};
    background-color: ${setColor.brandPrimary[100]};
    border-bottom: ${setBorder.borderSmPrimary};`

export const AccordionTitleWrapperStyles = css`
    background-color: transparent;
    border-bottom:  ${setBorder.borderSmPrimary};
    padding: ${setSpacing.baseTight};
  `

export const AccordionTitleContentStyles = css`
    ${H3Styles};
    text-transform: none;
    ${setFlex({ align: "center", justify: "space-between" })};
    font-size: ${setFontSize.large};
    padding: ${setSpacing.tight} 0;
    color: ${props =>
        props.expanded ? setColor.brandMonochrome[0] : setColor.brandPrimary[700]};
    margin: 0;
    button {
      width: auto;
      min-width: 45px;
      min-height: 45px;
      all: inherit;
      ${setFlex({ align: "center", justify: "space-between" })}
      margin: 0;
      &:focus svg {
        outline: 0;
        box-shadow: 0 0 0 3px ${setColor.brandPrimary[300]};
      }
      svg {
        margin-left: ${setSpacing.base};
        fill: currentColor;
      }
    }
  `