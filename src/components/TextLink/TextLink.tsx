import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { TextLinkOnBrandBgStyles, TextLinkWrapperStyles} from "./TextLinkStyles"

export interface TextLinkProps {
    children: any
    link: string,
    isOnBrandBg?: boolean,
    isExternal?: boolean,
}
const TextLink = ({ children, link = "#", isOnBrandBg, isExternal, noUnderline }) => {
  return (
    <>
      {isExternal ? (
        <ExternalTextLinkWrapper
          href={link}
          target="_blank"
          isOnBrandBg={isOnBrandBg}
         
        >
          {children}
        </ExternalTextLinkWrapper>
      ) : (
        <InternalTextLinkWrapper
          to={link}
          isOnBrandBg={isOnBrandBg}
         
        >
          {children}
        </InternalTextLinkWrapper>
      )}
    </>
  )
}


const ExternalTextLinkWrapper = styled.a`
  ${TextLinkWrapperStyles};
`
const InternalTextLinkWrapper = styled(Link)`
  ${TextLinkWrapperStyles};
`

export default TextLink
