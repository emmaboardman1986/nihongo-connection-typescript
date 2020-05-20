import React from "react"
import styled from "styled-components"
import {
  RichTextWrapperStyles,
  RichTextEmphasisStyles,
  RichTextStarredListStyles,
} from "./RichTextStyles"
import { setFont } from "../../styles/styleHelpers"

export interface RichTextProps {
  content: string
  emphasiseText?: boolean
  starredList?: boolean
}

const RichText = ({ content, emphasiseText = false, starredList = false }) => {
  return (
    <RichTextWrapper
      emphasiseText={emphasiseText}
      starredList={starredList}
      dangerouslySetInnerHTML={{ __html: content }}
    ></RichTextWrapper>
  )
}

const RichTextWrapper = styled.div`
  ${RichTextWrapperStyles};
  ${props => props.emphasiseText && RichTextEmphasisStyles};
  ${props => props.starredList && RichTextStarredListStyles};
`

export default RichText
