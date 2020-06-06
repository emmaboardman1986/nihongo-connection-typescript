import React, { useContext } from "react"
import styled from "styled-components"
import Pill from "../../Pill"
import {
  FilterGroupContentStyles,
  FilterGroupStyles,
  FilterGroupTitleStyles,
} from "./FilterGroupStyles"
import VerticalSpacing from "../../utilities/VerticalSpacing"

import { FilterContext } from "../../../context/FilterContext"

type FilterGroupObject = {
  "data-name": string
  displayName: string
}
export interface FilterGroupProps {
  filter: {
    [key: string]: {
      displayName: string
      options: FilterGroupObject
    }
  }
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
          // option key not required, but leaving in for readability
          let [optionKey, optionDetails] = option
          console.log(optionDetails);
          return (
            <Pill
              key={index}
              // dataName={optionDetails.}
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
      <VerticalSpacing size={{ _: "baseLoose" }}></VerticalSpacing>
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
