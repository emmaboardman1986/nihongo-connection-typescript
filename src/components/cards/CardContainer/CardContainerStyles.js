import { css } from "styled-components"
import { breakpoint } from "../../../styles/styleHelpers"

export const CardContainerStyles = css`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  ${"" /* // account for box-shadow */}
  padding-bottom: 6px;
  padding-right: 6px;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: ${props =>
      props.noHorizontalScroll
        ? "repeat(auto-fill, 100%)"
        : "repeat(auto-fill, 15rem)"};
    ${'' /* grid-template-columns: repeat(auto-fill, 15rem); */}
    grid-gap: 1.5rem;
    grid-auto-flow: ${props => (props.noHorizontalScroll ? "row" : "column")};
    grid-auto-columns: 15rem;
    justify-items: center;
    ${breakpoint.xs`
    grid-template-columns: repeat(auto-fill, 15rem)`}
  }
  li {
    width: 100%;
    list-style: none;
    height: 100%;
  }
`
