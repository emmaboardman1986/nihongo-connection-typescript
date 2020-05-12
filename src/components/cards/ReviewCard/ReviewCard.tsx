import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { ReviewCardStyles } from "./ReviewCardStyles"
import { useTruncateText } from "../../../customHooks/useTruncateText"
import { Link } from "gatsby"
import Ellipsis from "../../Ellipsis"
import VerticalSpacing from "../../utilities/VerticalSpacing"

export interface ReviewCardProps {
  content: string
  date: string
  name?: string
  id?: string
}

const ReviewCard = ({ content, date, name, id }) => {
  const [truncatedContent, setTruncatedContent] = useState("Loading Reviews")
  useEffect(() => {
    setTruncatedContent(useTruncateText(content, 25))
  }, [])

  return (
    <ReviewCardWrapper>
      <blockquote>
        {truncatedContent}{" "}
        <Link to={`/reviews/${id}`}>
          <Ellipsis screenReaderText="Read full review"></Ellipsis>{" "}
        </Link>
      </blockquote>
      <VerticalSpacing></VerticalSpacing>
      {date && <small>{date}</small>}
      <small>{name ? name : "Anonymous"}</small>
    </ReviewCardWrapper>
  )
}

const ReviewCardWrapper = styled.div`
  ${ReviewCardStyles};
`

export default ReviewCard
