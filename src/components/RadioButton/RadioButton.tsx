import React from "react"

import {
  StyledRadioButtonWrappingLabel,
  StyledRadioButtonInput,
} from "./RadioButtonStyles"

const RadioButton = ({ id, name, value, checked, labelText, onChange }) => {
  return (
    <StyledRadioButtonWrappingLabel>
      <StyledRadioButtonInput
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />

      <span>{labelText}</span>
    </StyledRadioButtonWrappingLabel>
  )
}

export default RadioButton
