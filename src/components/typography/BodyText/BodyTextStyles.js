import {css} from 'styled-components'
import { setFont, setColor } from '../../../styles/styleHelpers'

export const BodyTextStyles = css`
  font-family: ${setFont.fontPrimaryRegular};
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${setColor.brandBlack};
  p {
      padding: 0.25rem 0;
  }
`