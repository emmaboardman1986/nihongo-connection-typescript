import {css} from 'styled-components'
import { setFont, setColor, setSpacing } from '../../../styles/styleHelpers'



export const HeadingStyles = css`
margin-top: ${setSpacing.loose};
margin-bottom: ${setSpacing.loose};
`

export const H1Styles = css`
  font-family: ${setFont.fontPrimaryMedium};
  font-size: 1.5rem;
  line-height: 1.9rem;
  color: ${setColor.brandPrimary[800]};
`

export const H2Styles = css`
  font-family: ${setFont.fontPrimaryMedium};
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: ${setColor.brandPrimary[800]};
`