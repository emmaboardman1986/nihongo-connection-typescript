import React from "react"
import styled from "styled-components"
import { FilterStyles } from "./FilterStyles"
import FilterGroup from "../FilterGroup"

// pull in 3 seperate filters from context.
// create a group per filter, passing in the unique dispatch,
// each group has a unique click event that updates it's filters

const Filter = ({ filters }) => {
  const filtersArray = Object.entries(filters)

  return (
    <FilterWrapper>
      {filtersArray.map((filter, index) => {
        return <FilterGroup key={index} filter={filter}></FilterGroup>
      })}
     
    </FilterWrapper>
  )
}

const FilterWrapper = styled.form`
  ${FilterStyles};
`

export default Filter
