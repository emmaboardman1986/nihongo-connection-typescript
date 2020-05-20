import React from "react"
import styled from "styled-components"

const FormList = ({ children, flex }) => {
  return (
    <FormListWrapper flex={flex}>
      {children}
    </FormListWrapper>
  )
}

const FormListWrapper = styled.ul`
  list-style: none;
  display: ${props => (props.flex ? "flex" : null)};
  flex-wrap: wrap;
`

export default FormList
