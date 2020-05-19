import React from "react"
import styled from "styled-components"
import { FooterStyles, FooterSocialLinksStyles } from "./FooterStyles"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../Icon"
import VerticalSpacing from "../utilities/VerticalSpacing"

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
      allPrismicSocialLinks {
        nodes {
          data {
            social_link {
              social_link1 {
                url
              }
              social_title {
                text
              }
            }
          }
        }
      }
    }
  `)

  const footerContent = data.allPrismicFooterContent.nodes[0].data
  const socialLinks = data.allPrismicSocialLinks.nodes[0].data.social_link
  return (
    <FooterWrapper>
          <VerticalSpacing size="small"></VerticalSpacing>
   
     
      <FooterCopyright>
        <small>{footerContent.footer_copyright[0].text}</small>
      </FooterCopyright>
      <FooterSocialLinks>
        {socialLinks.map((socialLink, index) => (
          <a href={socialLink.social_link1.url} target="_blank" key={index}>
            <span className="visually-hidden">
              {socialLink.social_title[0].text}
            </span>
            <Icon
              icon={socialLink.social_title[0].text.toLowerCase()}
              fill="white"
              stroke="none"
            ></Icon>
          </a>
        ))}
      </FooterSocialLinks>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  ${FooterStyles};
`
const FooterCopyright = styled.div``

const FooterSocialLinks = styled.div`
  ${FooterSocialLinksStyles};
`

export default Footer
