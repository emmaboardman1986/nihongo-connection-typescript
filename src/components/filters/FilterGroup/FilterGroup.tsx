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
  dataName: string
  displayName: string
}
export interface FilterGroupProps {
  filterDetails: {
    categoryDisplayName: string
    categoryOptions: [FilterGroupObject]
  }
  filterState: {
    [key: string]: boolean
  }
  filterCategoryKey: string
}

const FilterGroup = ({ filterDetails, filterState, filterCategoryKey }:FilterGroupProps) => {
  const { dispatch } = useContext(FilterContext)

  return (
    <FilterGroupWrapper>
      <FilterGroupTitle>{filterDetails.categoryDisplayName}</FilterGroupTitle>
      <FilterGroupContents>
        {filterDetails.categoryOptions.map((option, index) => {
          return (
            <Pill
              key={index}
              text={option.displayName}
              onClick={() =>
                dispatch({
                  type: "toggle",
                  payload: {
                    option,
                    filterCategoryKey,
                  },
                })
              }
              ariaPressed={filterState[option.dataName]}
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
