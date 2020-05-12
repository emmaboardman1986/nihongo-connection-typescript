import { css } from "styled-components"

export const CardContainerStyles = css`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  ${'' /* // account for box-shadow */}
  padding-bottom: 6px;
  padding-right: 6px;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fill, 15rem);
    grid-gap: 1.5rem;
    grid-auto-flow: column;
    grid-auto-columns: 15rem;
  }
  li {
    list-style: none;
  }
`
