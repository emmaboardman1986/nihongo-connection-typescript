import styled, { css } from "styled-components"
import { BodyTextStyles } from "../../typography/BodyText/BodyTextStyles"
import {
  setBorder,
  setShadow,
  setFlex,
  setFlexDirection,
  setColor,
  setSpacing,
  setFontSize
} from "../../../styles/styleHelpers"

export const ClassCardStyles = css`
${BodyTextStyles};
background-color: ${setColor.brandMonochrome[0]};
border-radius: ${setBorder.borderRadius};
box-shadow: ${setShadow.elevate[100]};
cursor: pointer;
white-space: initial;
height: 100%;
&:hover {
    box-shadow: ${setShadow.depress[100]};
}
a {
  color: inherit;
  text-decoration: none;
  &:focus {
      text-decoration: underline;
  }
}
&:focus-within {
    box-shadow: ${setShadow.depress[100]};
    a:focus {
        text-decoration: none;
    }
}

`

const ClassCardWrapperStyles = css`
  ${setFlex()};
  ${setFlexDirection({ direction: "column" })};
`

const ClassCardLabelStyles = css`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: ${setColor.brandPrimary[600]};
  border-radius: ${setBorder.borderRadius};
  padding: 0.25rem 0.5rem;
  border: 2px solid white;
  z-index: 1;
  small {
    color: ${setColor.brandMonochrome[0]};
  }
`

const ClassCardImageStyles = css`
  height: 5rem;
  position: relative;
  img {
    border-top-right-radius: ${setBorder.borderRadius};
    border-top-left-radius: ${setBorder.borderRadius};
    object-fit: cover;
    height: 100%;
    width: 100%;
    filter: saturate(1) brightness(1) contrast(2);
  }
`
const ClassCardTextStyles = css`
  padding: ${setSpacing.base};
  box-sizing: border-box;
  ${setFlex()};
  ${setFlexDirection({ direction: "column" })};
  max-width: 60ch;
  flex-grow: 1;
  h3 {
    margin-top: ${setSpacing.xTight};
    margin-bottom: ${setSpacing.base};
  }
  a {
    color: inherit};
    text-decoration: none;
  }
  p {
    font-size: ${setFontSize.small};
    color: ${setColor.brandPrimary[800]};
    display: block;
    line-height: 1.2rem;
    strong {
      color: ${setColor.brandPrimary[700]};
    }
   &:nth-last-child(2) {
    margin-bottom: ${setSpacing.tight};
   }
  }
  `

const GradientStyles = css`
height: 100%;
  box-sizing: border-box;
  padding: ${setSpacing.tight};
  background: linear-gradient(
    to left,
    #434599,
    cyan,
    green,
    yellow,
    orange,
    #ed2530
  );
  border-radius: ${setBorder.borderRadius};`

const ClassCardInnerStyles = css`
  ${setFlex()};
  ${setFlexDirection({ direction: "column" })};
  background-color: white;
  border-radius: 10px;
  height: 100%;
  box-sizing: border-box;`


export const StyledClassCard = styled.div`
  ${ClassCardStyles};
  ${ClassCardWrapperStyles};
`

export const StyledClassCardInner = styled.div`
  ${ClassCardInnerStyles};
`

export const StyledGradient = styled.div`
  ${GradientStyles};
`

export const StyledClassCardImage = styled.div`
  ${ClassCardImageStyles};
`

export const StyledClassCardLabel = styled.span`
  ${ClassCardLabelStyles};
`

export const StyledClassCardText = styled.div`
  ${ClassCardTextStyles};
`