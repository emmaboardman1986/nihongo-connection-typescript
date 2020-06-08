import styled, { css } from "styled-components"
import { createResponsiveStyles } from "../../styles/styleHelpers"

export const FlexContainerStyles = css`
  display: flex;
  flex: 1;
`

export const StyledFlexContainer = styled.div`
  ${FlexContainerStyles};
  ${props => props.flexDirection && createResponsiveStyles("flex-direction", props.flexDirection)};
  ${props => props.justifyContent && createResponsiveStyles("justify-content", props.justifyContent)};
  ${props => props.alignItems && createResponsiveStyles("align-items", props.alignItems)};
`