import { css } from "styled-components"
import { setColor, setFlex, setSpacing } from "../../styles/styleHelpers"
import { BodyTextStyles } from "../typography/BodyText/BodyTextStyles"

export const FooterStyles = css`
background-color: ${setColor.brandPrimary[900]};
${BodyTextStyles};
color: ${setColor.brandMonochrome[0]};
${setFlex({ justify: "space-between", align: "center" })};
padding: ${setSpacing.base};
a {
    color: ${setColor.brandMonochrome[0]};
}
`

export const FooterSocialLinksStyles = css`
a {
margin-right: ${setSpacing.baseTight};
}
`
