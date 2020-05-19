import { css } from "styled-components"
import { BodyTextStyles } from "../../typography/BodyText/BodyTextStyles"
import {
  setBorder,
  setShadow,
  setFlex,
  setFlexDirection,
  setColor,
  setSpacing,
} from "../../../styles/styleHelpers"

export const ClassCardStyles = css`
${BodyTextStyles};
background-color: ${setColor.brandMonochrome[0]};
border-radius: ${setBorder.borderRadius};
box-shadow: ${setShadow.elevate[100]};
border: ${setBorder.borderSmBlack};
cursor: pointer;
white-space: initial;
height: 100%;
&:hover {
  border: ${setBorder.borderSmBlack};
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
  border:  ${setBorder.borderSmBlack};
    box-shadow: ${setShadow.depress[100]};
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
  background-color: ${setColor.brandPrimary[600]};
  border-radius: ${setBorder.borderRadius};
  padding: 0.25rem 0.5rem;
  border: 2px solid white;
  z-index: 1;
  small {
    color: ${setColor.brandMonochrome[0]};
  }
`

export const ClassCardImageStyles = css`
  height: 5rem;
  position: relative;
  margin-top: -2px;
  img {
    border-top-right-radius: ${setBorder.borderRadius};
    border-top-left-radius: ${setBorder.borderRadius};
    border-top: ${setBorder.borderSmBlack};
    object-fit: cover;
    height: 100%;
    width: 100%;
    filter: saturate(1) brightness(1) contrast(2);
  }
`
export const ClassCardTextStyles = css`
  padding: ${setSpacing.base};
  box-sizing: border-box;
  ${setFlex()};
  ${setFlexDirection({ direction: "column" })};
  max-width: 60ch;
  flex-grow: 1;
  h3 {
    margin-top: ${setSpacing.xTight};
    margin-bottom: ${setSpacing.tight};
  }
  a {
    color: inherit};
    text-decoration: none;
  }
  li {
    padding: 0.25rem 0;
    height: initial;
  }
  small {
    color: ${setColor.brandPrimary[800]};
    display: block;
    line-height: 1.2rem;
    strong {
      color: ${setColor.brandPrimary[700]};
    }
  }
  ul {
    height: 100%;
  }
  li:last-child {
    margin-top: auto;
  }
`
