import styled, { css } from "styled-components"
import { setColor, setBorder, setSpacing, setShadow, setFontSize, setFlex, setFont } from "../../styles/styleHelpers"
import { H3Styles } from "../typography/Heading/HeadingStyles"



const AccordionStyles = css`
  width: 100%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  `

const AccordionHoverStyles = css`
 background-color: ${setColor.brandPrimary[100]};
    border: 2px solid ${setColor.brandPrimary[900]};
    cursor: pointer;
`

const AccordionFocusStyles = css`
 outline: 0;
        box-shadow: 0 0 0 3px ${setColor.brandPrimary[300]};`

const AccordionToggleStyles = css`
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
  &:focus {
    ${AccordionFocusStyles};
  }
  &:hover {
   ${AccordionHoverStyles};
  }
  &.pressed-in {
    transform: translate(2px, 10%);
  }`

const AccordionMainStyles = css`
  border-radius: ${setBorder.borderRadius};
  border: ${setBorder.borderSmPrimary};
  margin: ${setSpacing.base} 0;`

const AccordionSectionStyles = css`
    background-color: ${props =>
    props.expanded ? setColor.brandPrimary[700] : setColor.brandMonochrome[0]};
    &:first-of-type {
      border-radius: ${props => props.expanded ? '5px' : setBorder.borderRadius};
    }`

const AccordionContentStyles = css`
    padding: ${setSpacing.baseTight};
    padding-bottom: ${setSpacing.loose};
    background-color: ${setColor.brandPrimary[100]};
    border-bottom: ${setBorder.borderSmPrimary};`


const AccordionTitleWrapperStyles = css`
  background-color: transparent;
  border-bottom:  ${setBorder.borderSmPrimary};
  padding: ${setSpacing.baseTight};`


const AccordionTitleStyles = css`
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
      ${setFlex({ align: "center", justify: "space-between" })};
      margin: 0;
      border: 2px solid transparent;
      border-radius: ${setBorder.borderRadius};
      &:focus svg {
        ${AccordionFocusStyles};
      }
      &:hover {
        ${AccordionHoverStyles};
        svg {
        fill: ${setColor.brandPrimary[700]}
        }
      }
      svg {
        width: 50px;
        ${'' /* height: 20px; */}
        fill: currentColor;
      }
    }
  `

export const StyledAccordion = styled.div`
${AccordionStyles};`

export const StyledAccordionToggle = styled.button`
  ${AccordionToggleStyles};`

export const StyledAccordionMain = styled.div`
  ${AccordionMainStyles};`

export const StyledAccordionSection = styled.div`
${AccordionSectionStyles};`

export const StyledAccordionContent = styled.div`
${AccordionContentStyles};`;

export const StyledAccordionTitleWrapper = styled.div`
  ${AccordionTitleWrapperStyles};`

export const StyledAccordionTitle = styled.h3`
  ${AccordionTitleStyles};
`