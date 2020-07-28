import styled from "styled-components"
import { BodyTextStyles} from "../BodyText/BodyTextStyles"
import {setColor} from "../../styles/styleHelpers"

export const StyledRadioButtonWrappingLabel = styled.label`
  padding-bottom: 0.25rem;
  display: block;
  ${BodyTextStyles};
`

export const StyledRadioButtonInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  & + span {
    padding: 0.25rem;
    display: flex;
    align-items: center;
    width: min-content;
    &:before {
      content: "";
      display: inline-block;
      margin-left: 0.25rem;
      width: 0.75em;
      height: 0.75em;
      vertical-align: -0.25em;
      border-radius: 1em;
      border: 0.125em solid #fff;
      box-shadow: 0 0 0 0.15em #000;
      margin-right: 0.75em;
      transition: 0.5s ease all;
    }
  }
  &:checked + span::before {
    background: ${setColor.brandPrimary[500]};
  }
  &:focus + span {
    box-shadow: 0 0 0 0.15em #000;
    border-radius: 6px;
  }
`
