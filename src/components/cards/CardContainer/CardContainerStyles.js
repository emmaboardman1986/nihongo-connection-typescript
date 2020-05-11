import { css } from "styled-components"
import {setPadding} from "../../../styles/styleHelpers"

export const CardContainerStyles = css`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding-bottom: 6px;
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
