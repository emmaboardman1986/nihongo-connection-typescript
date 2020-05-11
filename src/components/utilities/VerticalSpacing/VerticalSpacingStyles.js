import { css} from "styled-components"

export const VerticalSpacingStyles = css`
height: ${ props => props.size === "small" ? "0.5rem" : props.size === "large" ? "1.5rem" : props.size === "x-large" ? "1.8rem" : "1rem"};`