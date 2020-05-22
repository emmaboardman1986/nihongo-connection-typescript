import { css } from "styled-components"
import { createMediaQueriesFromTokens, setSpacing } from "../../../styles/styleHelpers"


export const VerticalSpacingStyles = css`
${'' /* height: ${ props => props.size === "x-small" ? "0.25rem" : props.size === "small" ? "0.5rem" : props.size === "large" ? "1.5rem" : props.size === "x-large" ? "1.8rem" : "1rem"};` */}
`

export const SizeStyles = size => {
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