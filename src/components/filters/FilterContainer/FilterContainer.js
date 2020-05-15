import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import Filter from "../Filter"
import CardContainer from "../../cards/CardContainer"

import { FilterContext } from "../../../context/FilterContext"



const FilterContainer = ({ listings }) => {
    const { state, dispatch } = useContext(FilterContext);
    const { filters, classes } = state;


    useEffect(() => {
        dispatch({ type: "no_filter", payload: listings })
    }, [])


    return (<FilterContainerWrapper>
        <Filter filters={filters}>

        </Filter>
        <FilterResults>
            <p style={{ margin: "2rem" }}>Showing {classes.length} results</p>
            <CardContainer
                cardType="class"
                cardContent={classes}
                noHorizontalScroll
            ></CardContainer>

        </FilterResults>

    </FilterContainerWrapper>)
}

const FilterContainerWrapper = styled.div``
const FilterResults = styled.div``


export default FilterContainer
