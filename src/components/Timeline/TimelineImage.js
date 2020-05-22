import React from "react"
import Icon from "../icon/Icon"
import styled from "styled-components"
import { setFlex, setColor, breakpoint } from "../../styles/styleHelpers"

const TimelineImage = ({ icon }) => {
  return (
    <TimelineImageWrapper className="timeline__img">
      <IconWrapper data-icon>
        <Icon
          icon={icon}
          color={setColor.brandWhite}
          fill={setColor.brandWhite}
          stroke={setColor.brandWhite}
        />
      </IconWrapper>
    </TimelineImageWrapper>
  )
}

const TimelineImageWrapper = styled.div`
  ${setFlex};
  align-items: baseline;
  flex-shrink: 0;
  z-index: 1;
  margin-left: -18px;
  margin-right: 15px;
  ${breakpoint.sm`
    order: 1;
    margin-left: calc(5% - 23px);
    `}
`

const IconWrapper = styled.div`
  padding: 0.5rem;
  border-radius: 50%;
  border: 3px solid ${setColor.brandPrimaryMedium};
  background-color: ${setColor.brandPrimary};
`

export default TimelineImage
