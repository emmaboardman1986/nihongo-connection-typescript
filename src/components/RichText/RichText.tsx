import React from "react"
import {
  StyledRichText
} from "./RichTextStyles"

export interface RichTextProps {
  content: string
  emphasiseText?: boolean
  starredList?: boolean
  isOnBrandBg?: boolean
}

const RichText = ({ content, emphasiseText = false, starredList = false, isOnBrandBg= false }:RichTextProps) => {
  return (
    <StyledRichText
      emphasiseText={emphasiseText}
      starredList={starredList}
      dangerouslySetInnerHTML={{ __html: content }}
    ></StyledRichText>
  )
}

export default RichText
