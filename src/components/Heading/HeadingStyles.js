import styled, { css } from 'styled-components'
import { setFont, setColor, setSpacing } from '../../styles/styleHelpers'

export const HeadingStyles = css`
margin-bottom: ${setSpacing.loose};
`

export const H1Styles = css`
  font-family: ${setFont.fontPrimaryMedium};
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${setColor.brandMonochrome[800]};
`

export const H2Styles = css`
  font-family: ${setFont.fontPrimaryMedium};
  font-size: 1.5rem;
  line-height: 2.1rem;
  color: ${setColor.brandPrimary[700]};
`

export const H3Styles = css`
  font-family: ${setFont.fontSecondaryBlack};
  font-size: 1.1rem;
  line-height: 1.4rem;
  color: ${setColor.brandMonochrome[900]};
`

export const StyledHeading = styled.div`
  ${HeadingStyles};
  ${props => props.as === "h1" && H1Styles};
  ${props => props.as === "h2" && H2Styles};
  ${props => props.as === "h3" && H3Styles};
`