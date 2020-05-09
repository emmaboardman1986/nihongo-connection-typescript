import { css } from "styled-components"
import { BodyTextStyles } from "../../typography/BodyText/BodyTextStyles"
import {
  setBorder,
  setFlex,
  setFlexDirection,
} from "../../../styles/styleHelpers"

export const ReviewCardStyles = css`
${BodyTextStyles}
border: ${setBorder.borderSmTransparent};
${setFlex({ align: "center", justify: "center" })};
  ${setFlexDirection({ direction: "column" })};
`
