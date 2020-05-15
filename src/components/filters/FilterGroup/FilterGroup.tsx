import React, { useContext } from "react"
import styled from "styled-components"
import Pill from "../../Pill"
import {
  FilterGroupContentStyles,
  FilterGroupStyles,
  FilterGroupTitleStyles,
} from "./FilterGroupStyles"

import { FilterContext } from "../../../context/FilterContext"

export interface FilterGroupProps {
  //   element?: "h1" | "h2" | "h3" | "h4"
  //   text: string
}

const FilterGroup = ({ filter }) => {
  const { dispatch } = useContext(FilterContext)

  return (
    <FilterGroupWrapper>
      <FilterGroupTitle>{filter.displayName}</FilterGroupTitle>
      <FilterGroupContents>
        {filter.options.map((option, index) => {
          return (
            <Pill
              key={index}
              name={option.name}
              text={option.displayName}
              onClick={() => dispatch({ type: filter.category, payload: option })}
              ariaPressed={option.value}
            ></Pill>
          )
        })}
      </FilterGroupContents>
    </FilterGroupWrapper>
  )
}

const FilterGroupWrapper = styled.fieldset`
  ${FilterGroupStyles};
`

const FilterGroupContents = styled.div`
  ${FilterGroupContentStyles};
`

const FilterGroupTitle = styled.legend`
  ${FilterGroupTitleStyles};
`

export default FilterGroup
