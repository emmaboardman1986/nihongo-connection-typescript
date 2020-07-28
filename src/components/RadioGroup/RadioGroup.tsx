import React from "react"
import BodyText from "../BodyText"
import {
  StyledRadioGroupLegend,
  StyledRadioGroupFieldset,
} from "./RadioGroupStyles"

const RadioGroup = ({ children, legend }) => {
  return (
    <StyledRadioGroupFieldset>
      <StyledRadioGroupLegend>
        <BodyText>{legend}</BodyText>
      </StyledRadioGroupLegend>
      {children}
    </StyledRadioGroupFieldset>
  )
}

export default RadioGroup
