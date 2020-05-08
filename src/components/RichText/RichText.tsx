import React from "react"
import styled from "styled-components"
import { BodyTextStyles } from "../typography/BodyText/BodyTextStyles"

export interface RichTextProps {
  content: string
}

const RichText = ({ content }) => {
  return (
    <RichTextWrapper
      dangerouslySetInnerHTML={{ __html: content }}
    ></RichTextWrapper>
  )
}

const RichTextWrapper = styled.div`
  ${BodyTextStyles}
`

export default RichText
