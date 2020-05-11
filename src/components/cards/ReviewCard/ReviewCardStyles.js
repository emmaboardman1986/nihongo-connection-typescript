import { css } from "styled-components"
import { BodyTextStyles } from "../../typography/BodyText/BodyTextStyles"
import { ClassCardStyles } from "../ClassCard/ClassCardStyles"
import {
  setBorder,
  setFlex,
  setFlexDirection,
  setFontSize,
  setPadding,
  setMargin,
  setColor,
} from "../../../styles/styleHelpers"

export const ReviewCardStyles = css`
  ${ClassCardStyles};
  ${BodyTextStyles};
  height: 100%;
  box-sizing: border-box;
  font-size: ${setFontSize.reduced};
  white-space: initial;
  padding: ${setPadding.largePadding};
  background-color: ${setColor.brandGreyLight};
  ${setFlex({ align: "flex-end" })};
  ${setFlexDirection({ direction: "column" })};
  a {
    color: inherit;
  }
  blockquote {
    flex: 1;
    text-align: center;
  }
`
