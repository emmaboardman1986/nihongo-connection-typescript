import styled from "styled-components"
import React from 'react';
import { EmphasisWrapperStyles} from "./EmphasisStyles"


export interface CardProps {
    color: "primary" | "secondary" | "black"
    children: any
    bgColor?: "white"
    noPaddingBottom?: boolean
    alignCenter?: boolean
  }

const Emphasis= ({children, color, bgColor, noPaddingBottom = false, alignCenter = false}) => {
    return(
        <EmphasisWrapper color={color} bgColor={bgColor} noPaddingBottom={noPaddingBottom} alignCenter={alignCenter}>
            {children}
        </EmphasisWrapper>
    )
}

const EmphasisWrapper = styled.div`
${EmphasisWrapperStyles};
`
export default Emphasis