import { css } from "styled-components"
import { BodyTextStyles } from "../../typography/BodyText/BodyTextStyles"
import {
  setBorder,
  setBoxShadow,
  setFlex,
  setFlexDirection,
  setMargin,
  setColor,
  setPadding,
} from "../../../styles/styleHelpers"

export const ClassCardStyles = css`
${BodyTextStyles}
border: ${setBorder.borderSmTransparent};
border-radius: ${setBorder.borderRadius};
box-shadow: ${setBoxShadow.clickAffordance};
cursor: pointer;
white-space: initial;
height: 100%;
&:hover {
    border: ${setBorder.borderSmBlack};
    box-shadow: ${setBoxShadow.clickAffordanceHover};
}
a:focus {
    text-decoration: underline;
}
&:focus-within {
    border: ${setBorder.borderSmBlack};
    box-shadow: ${setBoxShadow.clickAffordanceHover};
    a:focus {
        text-decoration: none;
    }
}

`

export const ClassCardWrapperStyles = css`
  ${setFlex()};
  ${setFlexDirection({ direction: "column" })};
`

export const ClassCardLabelStyles = css`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: ${setColor.brandWhite};
  border-radius: ${setBorder.borderRadius};
  padding: 0.25rem 0.5rem;
  border: ${setBorder.borderSmBlack};
`

export const ClassCardImageStyles = css`
  height: 5rem;
  position: relative;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`
export const ClassCardTextStyles = css`
  padding: ${setPadding.commonPadding};
  box-sizing: border-box;
  ${setFlex()};
  ${setFlexDirection({ direction: "column" })};
  max-width: 60ch;
  flex-grow: 1;
  h3 {
    margin-bottom: ${setMargin.reducedheadingTextMargin};
  }
  li {
    padding: 0.25rem 0;
  }
  small {
    display: block;
    line-height: 1.2rem;
  }
  p:last-child {
    margin-top: auto;
  }
  p:nth-last-child(2) {
    margin-bottom: ${setMargin.bodyTextMargin};
  }
`
