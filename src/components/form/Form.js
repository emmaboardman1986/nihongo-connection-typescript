import React from "react"
import styled from "styled-components"

const Form = ({
  children,
  method,
  action,
  id,
  name,
  className,
  target,
  onSubmit,
}) => {
  return (
    <FormWrapper
      //   action="https://nihongoscotland.us16.list-manage.com/subscribe/post?u=17e930ef2f11232d3ac0dca1e&amp;id=200df291c9"
      method={method}
      id={id}
      name={name}
      className={className}
      target={target}
      novalidate
      onSubmit={onSubmit}
    >
      {children}
    </FormWrapper>
  )
}

const FormWrapper = styled.form``

export default Form
