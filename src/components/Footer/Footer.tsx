import React from "react"
import styled from "styled-components"
import { FooterStyles, } from "./FooterStyles"
import { useStaticQuery, graphql } from "gatsby"
import SocialLinks from "../SocialLinks"

// export interface FooterProps {
//   element?: "h1" | "h2" | "h3" | "h4"
//   text: string,
//   className?: string
// }

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
    <FooterWrapper>
      <FooterCopyright>
        <small>{footerContent.footer_copyright[0].text}</small>
      </FooterCopyright>
     <SocialLinks></SocialLinks>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  ${FooterStyles};
`
const FooterCopyright = styled.div``

export default Footer
