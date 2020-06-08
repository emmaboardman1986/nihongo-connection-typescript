import styled, { css } from "styled-components"
import { setSpacing, setFlex, breakpoint, setColor } from "../../styles/styleHelpers"

const TimelineStyles = css`
  overflow: hidden;
  padding: ${setSpacing.base};
`

const TimelineContainerStyles = css`
 a {
    color: ${setColor.brandPrimary[600]};
    &:hover {
      background-color: ${setColor.brandPrimary[600]};
      color: ${setColor.brandMonochrome[0]};
    }
  }
  position: relative;
  padding: ${setSpacing.base};
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 8px;
    border-radius: 4px;
    background: black;
    ${breakpoint.sm`
      left: 50%;
      transform: translateX(-50%);`}
  }`

const TimelineBlockWrapperStyles = css`
display: flex;
padding: ${setSpacing.base} 0;
&:nth-child(even) {
  ${breakpoint.sm`
flex-direction: row-reverse;
`}
}
&:nth-child(even) .timeline__img {
  ${breakpoint.sm`
  margin-right: calc(5% - 23px);
`}
}
`

const TimelineImageWrapperStyles = css`
  ${setFlex({ justify: "center", align: "baseline" })};
  flex-shrink: 0;
  z-index: 1;
  margin-left: -18px;
  margin-right: 15px;
  ${breakpoint.sm`
    order: 1;
    margin-left: calc(5% - 23px);
    `}
`

const IconWrapperStyles = css`
  padding: ${setSpacing.tight};
  border-radius: 50%;
  border: 3px solid ${setColor.brandPrimary[300]};
  background-color: ${setColor.brandPrimary[600]};
`

const TimelineContentWrapperStyles = css`
 flex-grow: 1;
  ${breakpoint.sm`
  flex-grow: 0;
  width: 45%;
  `}
div {
  padding-top: ${setSpacing.tight};
}
`

export const StyledTimeline = styled.div`
  ${TimelineStyles};
`

export const StyledTimelineContainer = styled.div`
  ${TimelineContainerStyles}
`
export const StyledTimelineBlock = styled.div`
  ${TimelineBlockWrapperStyles};
`

export const StyledTimelineImage = styled.div`
  ${TimelineImageWrapperStyles};
`

export const StyledIcon = styled.div`
  ${IconWrapperStyles};
`
export const StyledTimelineContent = styled.div`
${TimelineContentWrapperStyles}`