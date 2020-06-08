import React, { useEffect, useState, useRef } from "react"
import { StyledReviewCard } from "./ReviewCardStyles"
import { useTruncateText } from "../../customHooks/useTruncateText"
import { Link } from "gatsby"
import Ellipsis from "../Ellipsis"
import VerticalSpacing from "../VerticalSpacing"

export interface ReviewCardProps {
  content: string
  date: string
  name?: string
  id?: string
  displayFull?: boolean
}

const ReviewCard = ({ content, date, name, displayFull }: ReviewCardProps) => {
  const [truncatedContent, setTruncatedContent] = useState("Loading Reviews")
  useEffect(() => {
    setTruncatedContent(useTruncateText(content, 25))
  }, [])

  const ref = useRef()
  const handleCardClick = e => {
    if (ref !== e.target) {
      ref.current.click()
    }
  }

  return (
    <StyledReviewCard onClick={handleCardClick} displayFull={displayFull}>
      <blockquote>
        {displayFull ? (
          content
        ) : (
          <>
            {truncatedContent}{" "}
            <Link to="/reviews" ref={ref}>
              <Ellipsis screenReaderText="Read Full Reviews on our Reviews page"></Ellipsis>{" "}
            </Link>
          </>
        )}
      </blockquote>
      <VerticalSpacing size={{ _: "base" }}></VerticalSpacing>
      {date && <small>{date}</small>}
      <small>{name ? name : "Anonymous"}</small>
    </StyledReviewCard>
  )
}

export default ReviewCard
