import React from "react"
import styled from "styled-components"
import { SocialLinksStyles } from "./SocialLinksStyles"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../Icon"

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
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

  const socialLinks = data.allPrismicSocialLinks.nodes[0].data.social_link
  return (
    <SocialLinksWrapper>
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
    </SocialLinksWrapper>
  )
}

const SocialLinksWrapper = styled.div`
  ${SocialLinksStyles};
`

export default SocialLinks
