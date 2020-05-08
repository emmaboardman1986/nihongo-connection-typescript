import React from "react"
import styled from 'styled-components'
import { SectionStyles } from "./SectionStyles"


const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>
}

const SectionWrapper = styled.section`
 ${SectionStyles};
`

export default Section
