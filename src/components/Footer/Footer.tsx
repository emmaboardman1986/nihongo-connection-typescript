import React from "react"
import { StyledFooter, StyledFooterCopyright } from "./FooterStyles"
import { useStaticQuery, graphql } from "gatsby"
import SocialLinks from "../SocialLinks"
import TextLink from "../TextLink"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allPrismicFooterContent {
        nodes {
          data {
            footer_copyright {
              text
            }
          }
        }
      }
    }
  `)

  const footerContent = data.allPrismicFooterContent.nodes[0].data
  return (
    <StyledFooter>
      <StyledFooterCopyright>
        <small>{footerContent.footer_copyright[0].text}</small>
      </StyledFooterCopyright>
      <small>
        <TextLink link="/cookie-policy" isOnBrandBg>
          Cookie Policy
        </TextLink>
      </small>
      <SocialLinks></SocialLinks>
    </StyledFooter>
  )
}

export default Footer
