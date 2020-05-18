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
  const [filterCategory, filterDetails] = filter
  const filterOptions = Object.entries(filterDetails.options)

  return (
    <FilterGroupWrapper>
      <FilterGroupTitle>{filterDetails.displayName}</FilterGroupTitle>
      <FilterGroupContents>
        {filterOptions.map((option, index) => {
          let [optionKey, optionDetails] = option
          return (
            <Pill
              key={index}
              text={optionDetails.displayName}
              onClick={() =>
                dispatch({
                  type: "toggle",
                  payload: {
                    option,
                    filterCategory,
                  },
                })
              }
              ariaPressed={optionDetails.value}
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
