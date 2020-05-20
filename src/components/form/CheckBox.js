import React from "react"
import styled from "styled-components"
import { setColor} from "../../styles/styleHelpers"

const CheckBox = ({ onChange, id, name, className, checked }) => {
  return (
    <>
      <CheckBoxWrapper
        type="checkbox"
        onChange={onChange}
        id={id}
        name={name}
        className={className}
        checked={checked}
      >

      </CheckBoxWrapper>

    
    </>
  )
}

const CheckBoxWrapper = styled.input`
  padding: 0.5rem;
  border: 2px solid ${setColor.brandWhite};
  box-sizing: border-box;
  margin-right: 0.5rem;
`

export default CheckBox
