import React from "react"
import styled from "styled-components"
import { ReviewCardStyles } from "./ReviewCardStyles"

const ReviewCard = ({children}) => {

  return (
    <ReviewCardWrapper>
    {children}
    </ReviewCardWrapper>
  )
}

const ReviewCardWrapper = styled.div`
  ${ReviewCardStyles};
`

export default ReviewCard
