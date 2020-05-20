import React from "react"
import styled from "styled-components"

const Label = ({ children, htmlFor, display, className }) => {
  return (
    <LabelWrapper htmlFor={htmlFor} display={display} className={className}>
      {children}
    </LabelWrapper>
  )
}

const LabelWrapper = styled.label`
  display: ${props => (props.display ? props.display : "block")};
  font-size: 0.8rem;
  font-family: "Poppins-Regular";
  padding-bottom: 1px;
`

export default Label
