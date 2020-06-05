import styled, { css } from "styled-components"
import { createMediaQueriesFromTokens, setSpacing } from "../../../styles/styleHelpers"


const VerticalSpacingStyles = css`
${'' /* height: ${ props => props.size === "x-small" ? "0.25rem" : props.size === "small" ? "0.5rem" : props.size === "large" ? "1.5rem" : props.size === "x-large" ? "1.8rem" : "1rem"};` */}
`

const SizeStyles = size => {
    const styles = [
        css`
        height: ${setSpacing[size["_"]]};
      `,
    ]
    if (Object.keys(size).length > 1) {
        styles.push(createMediaQueriesFromTokens("height", size, setSpacing))
    }

    return styles
}

export const StyledVerticalSpacing = styled.div`
  ${VerticalSpacingStyles};
  ${props => props.size && SizeStyles(props.size)};
`