import React from "react"

import {
  StyledExternalTextLink,
  StyledInternalTextLink,
} from "./TextLinkStyles"

export interface TextLinkProps {
  children: any
  link: string
  isOnBrandBg?: boolean
  isExternal?: boolean
}
const TextLink = ({
  children,
  link = "#",
  isOnBrandBg,
  isExternal,
}: TextLinkProps) => {
  return (
    <>
      {isExternal ? (
        <StyledExternalTextLink
          href={link}
          target="_blank"
          isOnBrandBg={isOnBrandBg}
        >
          {children}
        </StyledExternalTextLink>
      ) : (
        <StyledInternalTextLink to={link} isOnBrandBg={isOnBrandBg}>
          {children}
        </StyledInternalTextLink>
      )}
    </>
  )
}

export default TextLink
