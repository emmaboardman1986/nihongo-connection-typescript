import { css} from "styled-components";
import {setColor, setBorder, setSpacing} from "../../styles/styleHelpers"

export const EmphasisWrapperStyles = css`
border-radius: ${setBorder.borderRadius};
border: 1px dashed ${props => props.color === "primary" ? setColor.brandPrimary[400] : props.color = "secondary" ? setColor.brandSecondary[200] : setColor.brandMonochrome[900]};
padding: ${setSpacing.loose};
padding-bottom: 0;
`