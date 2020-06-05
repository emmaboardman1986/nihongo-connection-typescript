import styled, { css } from "styled-components"
import { setSpacing } from "../../styles/styleHelpers"

const SocialLinksStyles = css`
a {
margin-right: ${setSpacing.baseTight};
}
`

export const StyledSocialLinks = styled.div`
  ${SocialLinksStyles};
`