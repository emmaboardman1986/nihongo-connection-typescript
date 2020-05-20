import React from "react"
import styled from "styled-components"
import { setColor, setBorder } from "../../styles/styleHelpers"

const InputBox = ({ type, value, onChange, id, name, className, required}) => {
  return (
    <>
      <InputBoxWrapper
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        className={className}
        required={required}
      ></InputBoxWrapper>

      <VerticalSpacing />
    </>
  )
}

const InputBoxWrapper = styled.input`
  padding: 0.5rem;
  border: 2px solid ${setColor.brandWhite};
  border-radius: ${setBorder.borderRadius};
  width: 100%;
  box-sizing: border-box;
`

const VerticalSpacing = styled.div`
  height: 0.6rem;
`

export default InputBox
