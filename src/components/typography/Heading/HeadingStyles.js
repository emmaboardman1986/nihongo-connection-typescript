import {css} from 'styled-components'
import { setFont, setColor, setSpacing } from '../../../styles/styleHelpers'



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
  line-height: 1.8rem;
  color: ${setColor.brandPrimary[700]};
`

export const H3Styles = css`
  font-family: ${setFont.fontSecondaryBlack};
  font-size: 1.1rem;
  line-height: 1.4rem;
  color: ${setColor.brandMonochrome[900]};
`