import styled, { css } from "styled-components"
import { createMediaQueriesFromTokens, setSpacing } from "../../../styles/styleHelpers"


const VerticalSpacingStyles = css`
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