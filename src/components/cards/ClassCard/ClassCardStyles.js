import { css } from "styled-components"
import { BodyTextStyles } from "../../typography/BodyText/BodyTextStyles"
import {
  setBorder,
  setBoxShadow,
  setFlex,
  setFlexDirection,
  setMargin,
  setColor
} from "../../../styles/styleHelpers"

export const ClassCardStyles = css`
${BodyTextStyles}
border: ${setBorder.borderSmTransparent};
border-radius: ${setBorder.borderRadius};
box-shadow: ${setBoxShadow.clickAffordance};
cursor: pointer;
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
  ${setFlex()};
  ${setFlexDirection({ direction: "column" })};
  max-width: 60ch;
  flex-grow: 1;
  p:last-child {
    margin-top: auto;
  }
  p:nth-last-child(2) {
    margin-bottom: ${setMargin.bodyTextMargin};
  }
`
