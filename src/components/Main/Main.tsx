import React from "react"
import styled from 'styled-components'
import { MainStyles } from "./MainStyles"


const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>
}

const MainWrapper = styled.main`
 ${MainStyles};
`

export default Main
