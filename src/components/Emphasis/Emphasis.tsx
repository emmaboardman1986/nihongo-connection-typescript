import React from 'react';
import { StyledEmphasis} from "./EmphasisStyles"


export interface EmphasisProps {
    color: "primary" | "secondary" | "black"
    children: any
    bgColor?: "white" | "primary-light"
    noPaddingBottom?: boolean
    alignCenter?: boolean
    reducedPadding?: boolean
  }

const Emphasis= ({children, color, bgColor, noPaddingBottom = false, alignCenter = false, reducedPadding}:EmphasisProps) => {
    return(
        <StyledEmphasis color={color} bgColor={bgColor} noPaddingBottom={noPaddingBottom} alignCenter={alignCenter} reducedPadding={reducedPadding}>
            {children}
        </StyledEmphasis>
    )
}

export default Emphasis