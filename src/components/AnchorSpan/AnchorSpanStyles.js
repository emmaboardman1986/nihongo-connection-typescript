import { css} from "styled-components"
import { setHeight} from "../../styles/styleHelpers"

export const AnchorSpanStyles = css`
  height: ${setHeight.navHeight};
  margin-top: -${setHeight.navHeight};
  visibility: hidden;
`