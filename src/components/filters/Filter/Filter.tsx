import React, { useContext } from "react"
import { StyledFilter } from "./FilterStyles"
import FilterGroup from "../FilterGroup"
import { FilterContext } from "../../../context/FilterContext"

const Filter = ({ filters }) => {
  const { state } = useContext(FilterContext)

  const filterCategoryArray = Object.entries(filters)

  return (
    <StyledFilter>
      {filterCategoryArray.map((filter, index) => {
        let [filterCategoryKey, filterCategoryDetails] = filter
        return (
          <FilterGroup
            key={index}
            filterCategoryKey={filterCategoryKey}
            filterDetails={filterCategoryDetails}
            filterState={state[filterCategoryKey]}
          ></FilterGroup>
        )
      })}
    </StyledFilter>
  )
}

export default Filter
