import styled, { css } from "styled-components";
import { setColor, setBorder, setSpacing } from "../../styles/styleHelpers"

const EmphasisWrapperStyles = css`
border-radius: ${setBorder.borderRadius};
border: 1px dashed ${props => props.color === "primary" ? setColor.brandPrimary[400] : props.color === "secondary" ? setColor.brandSecondary[200] : setColor.brandMonochrome[900]};
padding: ${setSpacing.loose};
padding-bottom: ${props => props.noPaddingBottom ? 0 : null};
text-align: ${props => props.alignCenter ? 'center' : 'left'};
background-color: ${props => props.bgColor === "white" ? setColor.brandMonochrome[0] : "transparent"};
p {
    color: ${props => props.bgColor === "white" ? setColor.brandMonochrome[900] : "inherit"};  
}
`

export const StyledEmphasis = styled.div`
${EmphasisWrapperStyles};
`