import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import Filter from "../Filter"
import CardContainer from "../../cards/CardContainer"

import { FilterContext } from "../../../context/FilterContext"



const FilterContainer = ({ listings }) => {
    const { state } = useContext(FilterContext);
    const [filteredClasses, setFilteredClasses] = useState([])
 
    return (<FilterContainerWrapper>
        <Filter filters={state}>

        </Filter>
        {/* {
            filteredClasses.length > 0 ? (

                <FilterResults locationFilter={filters[1]} formatFilter={filters[2]}>

                    <p style={{ margin: "2rem" }}>Showing {filteredClasses.length} results</p>
                    <CardContainer
                        cardType="class"
                        cardContent={filteredClasses}
                        noHorizontalScroll
                    ></CardContainer>

                </FilterResults>

            ) : (
                    <FilterResults locationFilter={filters[1]} formatFilter={filters[2]}>

                        <p style={{ margin: "2rem" }}>Showing all {listings.length} results</p>
                        <CardContainer
                            cardType="class"
                            cardContent={listings}
                            noHorizontalScroll
                        ></CardContainer>

                    </FilterResults>
                )
        } */}


    </FilterContainerWrapper>)
}

const FilterContainerWrapper = styled.div``
const FilterResults = styled.div``


export default FilterContainer
