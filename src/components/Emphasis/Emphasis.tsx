import styled from "styled-components"
import React from 'react';
import { EmphasisWrapperStyles} from "./EmphasisStyles"


export interface CardProps {
    color: "primary" | "secondary" | "black"
    children: any
  }

const Emphasis= ({children, color}) => {
    return(
        <EmphasisWrapper color={color}>
            {children}
        </EmphasisWrapper>
    )
}

const EmphasisWrapper = styled.div`
${EmphasisWrapperStyles};
`
export default Emphasis