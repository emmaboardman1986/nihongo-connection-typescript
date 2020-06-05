import React from 'react';
import { StyledEmphasis} from "./EmphasisStyles"


export interface EmphasisProps {
    color: "primary" | "secondary" | "black"
    children: any
    bgColor?: "white"
    noPaddingBottom?: boolean
    alignCenter?: boolean
  }

const Emphasis= ({children, color, bgColor, noPaddingBottom = false, alignCenter = false}:EmphasisProps) => {
    return(
        <StyledEmphasis color={color} bgColor={bgColor} noPaddingBottom={noPaddingBottom} alignCenter={alignCenter}>
            {children}
        </StyledEmphasis>
    )
}

export default Emphasis