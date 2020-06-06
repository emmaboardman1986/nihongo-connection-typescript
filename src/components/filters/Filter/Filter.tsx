import React, { useContext } from "react"
import styled from "styled-components"
import { FilterStyles } from "./FilterStyles"
import FilterGroup from "../FilterGroup"
import { FilterContext } from "../../../context/FilterContext"
  
const Filter = ({ filters }) => {
  const { state } = useContext(FilterContext)

  const filterCategoryArray = Object.entries(filters)

  return (
    <FilterWrapper>
      {filterCategoryArray.map((filter, index) => {
        let [filterCategoryKey, filterCategoryDetails] = filter;
        console.log(filterCategoryDetails);
        return (
          <FilterGroup
            key={index}
            filterCategoryKey={filterCategoryKey}
            filterDetails={filterCategoryDetails}
            filterState={state[filterCategoryKey]}
          ></FilterGroup>
        )
      })}
    </FilterWrapper>
  )
}

const FilterWrapper = styled.form`
  ${FilterStyles};
`

export default Filter
