import { css } from "styled-components"
import {setBorder } from "../../styles/styleHelpers"

export const SectionResponsiveImageStyles = css`
width: 100%;
img {
    width: 100%;
    border-radius: ${setBorder.borderRadius};
    border: ${setBorder.borderSmPrimary};

}
`
