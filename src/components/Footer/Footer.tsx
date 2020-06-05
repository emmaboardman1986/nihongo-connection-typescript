import React from "react"
import { StyledFooter, StyledFooterCopyright } from "./FooterStyles"
import { useStaticQuery, graphql } from "gatsby"
import SocialLinks from "../SocialLinks"

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
      <SocialLinks></SocialLinks>
    </StyledFooter>
  )
}


export default Footer
