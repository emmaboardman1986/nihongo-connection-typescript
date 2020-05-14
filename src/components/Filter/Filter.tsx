import React, { useContext } from "react"
import styled from "styled-components"
import {
  FilterStyles,
  FilterGroupStyles,
  FilterGroupTitleStyles,
} from "./FilterStyles"
import Pill from "../Pill"

import { FilterContext } from "../../context/FilterContext"

// export interface FilterProps {
//   name: string
//   ariaPressed: boolean
// }

const Filter = () => {
  const { state, dispatch } = useContext(FilterContext)
  const handleFilterClick = e => {
    let filterName = e.target.name
    console.log(filterName)
    dispatch({ filter: filterName, filterValue: !state[filterName] })
  }

  const handleFilterReset = () => {
    // set all to false
    console.log("reset")
  }

  return (
    <FilterWrapper>
      <FilterGroup>
        <FilterGroupTitle>I am...</FilterGroupTitle>
        <Pill
          name="showStudent"
          text="Learning Japanese"
          onClick={handleFilterClick}
          ariaPressed={state.showStudent}
        ></Pill>
        <Pill
          name="showTeacher"
          text="Teaching Japanese"
          onClick={handleFilterClick}
          ariaPressed={state.showTeacher}
        ></Pill>
      </FilterGroup>
      <FilterGroup>
        <FilterGroupTitle>I want to take classes...</FilterGroupTitle>
        <Pill
          name="showOnline"
          text="Online"
          onClick={handleFilterClick}
          ariaPressed={state.showOnline}
        ></Pill>
        <Pill
          name="showInEdinburgh"
          text="In Edinburgh"
          onClick={handleFilterClick}
          ariaPressed={state.showInEdinburgh}
        ></Pill>
      </FilterGroup>
      <FilterGroup>
        <FilterGroupTitle>I would prefer...</FilterGroupTitle>
        <Pill
          name="showIntensive"
          text="Intensive learning"
          onClick={handleFilterClick}
          ariaPressed={state.showIntensive}
        ></Pill>
        <Pill
          name="showRegular"
          text="Regular Classes"
          onClick={handleFilterClick}
          ariaPressed={state.showRegular}
        ></Pill>
         <Pill
          name="showDropIn"
          text="Drop-in Sessions"
          onClick={handleFilterClick}
          ariaPressed={state.showDropIn}
        ></Pill>
      </FilterGroup>
      <button type="button" onClick={handleFilterReset}>Reset Filters</button>
    </FilterWrapper>
  )
}

const FilterWrapper = styled.form`
  ${FilterStyles};
`

const FilterGroup = styled.fieldset`
  ${FilterGroupStyles};
`

const FilterGroupTitle = styled.legend`
  ${FilterGroupTitleStyles};
`

export default Filter
