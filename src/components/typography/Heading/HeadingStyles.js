import {css} from 'styled-components'
import { setFont, setColor, setMargin } from '../../../styles/styleHelpers'

export const HeadingStyles = css`
margin-bottom: ${setMargin.headingTextMargin};
`

export const H1Styles = css`
  font-family: ${setFont.fontPrimaryMedium};
  font-size: 1.5rem;
  line-height: 1.9rem;
  color: ${setColor.brandBlack};
`

export const H2Styles = css`
  font-family: ${setFont.fontPrimaryMedium};
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: ${setColor.brandBlack};
`