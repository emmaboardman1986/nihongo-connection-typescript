import { css } from "styled-components"
import { createMediaQueries } from "../../../styles/styleHelpers"

export const FlexContainerStyles = css`
  display: flex;
  flex: 1;
`

export const directionStyle = direction => {
  const styles = [
    css`
      flex-direction: ${direction["_"]};
    `,
  ]
  if (Object.keys(direction).length > 1) {
    styles.push(createMediaQueries("flex-direction", direction))
  }
  return styles
}
