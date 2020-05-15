import React from "react"
import styled from "styled-components"
import { FilterStyles } from "./FilterStyles"
import FilterGroup from "../FilterGroup"

const Filter = ({ filters }) => {
  console.log("filters", filters);
  return (
    <FilterWrapper>
      {filters.map((filter, index) => {
        return <FilterGroup key={index} filter={filter}></FilterGroup>
      })}
    </FilterWrapper>
  )
}

const FilterWrapper = styled.form`
  ${FilterStyles};
`

export default Filter
