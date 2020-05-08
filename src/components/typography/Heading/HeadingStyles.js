import {css} from 'styled-components'
import { setFont, setColor } from '../../../styles/styleHelpers'

export const H1Styles = css`
  font-family: ${setFont.fontPrimaryMedium};
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: ${setColor.brandBlack};
`