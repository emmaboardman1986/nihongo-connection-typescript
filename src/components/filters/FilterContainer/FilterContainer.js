import React, { useContext } from "react"
import styled from "styled-components"
import Filter from "../Filter"
import CardContainer from "../../cards/CardContainer"

import { FilterContext } from "../../../context/FilterContext"



const FilterContainer = ({ classes }) => {
    const { state } = useContext(FilterContext);

    const collectTrueFilters = () => {
        let updatedFilter = {};
        for (var filterCategory in state) {
            updatedFilter[filterCategory] = [];
            for (var option in state[filterCategory].options) {
                if (state[filterCategory].options[option]["value"]) {
                    updatedFilter[filterCategory].push(
                        state[filterCategory].options[option]["displayName"]
                    );
                }
            }
        }
        return updatedFilter;
    };




    const returnFilterMatches = (filter, filterGroup, classes) => {
        let filterGroupResults = [];
        if (filter[filterGroup].length > 0) {



            filter[filterGroup].map(value => {
                classes.map(classItem => {
                    if (
                        classItem.node.data[filterGroup] === value
                    ) {
                        filterGroupResults.push(classItem);
                    }
                })
            })
        }
        else {
            filterGroupResults = classes;
        }
        return filterGroupResults;
    }

    const applyFilter = (classes, filter) => {
        var targetGroupResults = [];
        var locationGroupResults = [];
        var formatGroupResults = [];
        for (var filterGroup in filter) {
            if (filterGroup === "class_target") {
                targetGroupResults = returnFilterMatches(filter, filterGroup, classes)
            }
            if (filterGroup === "class_location") {
                locationGroupResults = returnFilterMatches(filter, filterGroup, targetGroupResults)
            }
            if (filterGroup === "class_learning_style") {
                formatGroupResults = returnFilterMatches(filter, filterGroup, locationGroupResults)
            }

        }
        return formatGroupResults;
    };


    let filteredClasses = applyFilter(classes, collectTrueFilters());

    console.log("filtered", filteredClasses)

    return (
        <FilterContainerWrapper>
            <Filter filters={state}>
            </Filter>
            <FilterResults>
                <p style={{ margin: "2rem" }}>Showing {filteredClasses.length} results</p>
                <CardContainer
                    cardType="class"
                    cardContent={filteredClasses}
                    noHorizontalScroll
                ></CardContainer>
            </FilterResults>
        </FilterContainerWrapper>
    )
}

const FilterContainerWrapper = styled.div``
const FilterResults = styled.div``


export default FilterContainer
