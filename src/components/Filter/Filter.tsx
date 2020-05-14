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
    dispatch({ filter: filterName, filterValue: !state[filterName] })
  }

  return (
    <FilterWrapper>
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
