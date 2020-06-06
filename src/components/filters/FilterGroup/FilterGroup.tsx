import React, { useContext } from "react"
import Pill from "../../Pill"
import {
  StyledFilterGroup,
  StyledFilterGroupContents,
  StyledFilterGroupTitle,
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

const FilterGroup = ({
  filterDetails,
  filterState,
  filterCategoryKey,
}: FilterGroupProps) => {
  const { dispatch } = useContext(FilterContext)

  return (
    <StyledFilterGroup>
      <StyledFilterGroupTitle>{filterDetails.categoryDisplayName}</StyledFilterGroupTitle>
      <StyledFilterGroupContents>
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
      </StyledFilterGroupContents>
      <VerticalSpacing size={{ _: "baseLoose" }}></VerticalSpacing>
    </StyledFilterGroup>
  )
}



export default FilterGroup
