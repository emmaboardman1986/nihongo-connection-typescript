import React from "react"
import styled from "styled-components"

const GDPR = ({ children, className }) => {
  return <GDPRWrapper className={className}>{children}</GDPRWrapper>
}

const GDPRWrapper = styled.div`
  margin-top: 1rem;
  fieldset {
    border: none;
    display: flex;
  }
`

export default GDPR
