import React, { useContext } from "react"
import styled from "styled-components"
import Filter from "../Filter"
import CardContainer from "../../CardContainer"
import BodyText from "../../typography/BodyText"
import Heading from "../../typography/Heading"
import VerticalSpacing from "../../utilities/VerticalSpacing"
import HighlightPill from "../../HighlightPill"
import Emphasis from "../../Emphasis"
import MailChimp from "../../MailChimp/MailChimp"
import Card from "../../Card"

import { FilterContext } from "../../../context/FilterContext"
import FlexContainer from "../../utilities/FlexContainer"



const FilterContainer = ({ classes }) => {
    const { state, dispatch } = useContext(FilterContext);

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

    const checkForFilters = () => {
        let trueFilters = Object.values(collectTrueFilters()).filter(value => (
            value.length > 0))
        return trueFilters;
    }

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

    return (
        <FilterContainerWrapper activeFilters={checkForFilters()}>
            <Heading element="h2" className="visually-hidden">Class Filters</Heading>

            <Filter filters={state}>

            </Filter>

            <FilterResults >
                <VerticalSpacing size={{ _: "baseTight" }}></VerticalSpacing>
                <Heading element="h2" className="visually-hidden">Class List</Heading>

                <FlexContainer justifyContent={{ _: "space-between" }}>
                    <BodyText>Showing <strong>{filteredClasses.length === classes.length ? "all" : filteredClasses.length}</strong> class{filteredClasses.length !== 1 ? "es" : null}:</BodyText>
                    {checkForFilters().length > 0 ? <div style={{ marginTop: "-0.75rem" }}><HighlightPill isAction onClick={() => dispatch({ type: "reset" })}>Reset Filters</HighlightPill></div> : null}
                </FlexContainer>


                <VerticalSpacing size={{ _: "baseTight" }}></VerticalSpacing>
                {filteredClasses.length > 0 ? (

                    <CardContainer
                        cardType="class"
                        cardContent={filteredClasses}
                        noHorizontalScroll
                    ></CardContainer>
                ) : (
                        <>
                            <VerticalSpacing size={{ _: "base" }}></VerticalSpacing>
                            <Emphasis color="black">
                                <BodyText>We don't currently have classes that meet the filters you have selected.</BodyText>
                                <VerticalSpacing size={{ _: "baseTight" }}></VerticalSpacing>
                                <BodyText>Sign up to our mailing list for an invitation to new classes, as they become available:</BodyText>
                                <VerticalSpacing size={{ _: "base" }}></VerticalSpacing>
                                <Card bgColor="secondary">
                                    <MailChimp emphasisColor="secondary" />
                                </Card>
                            </Emphasis>
                        </>
                    )}

            </FilterResults>
        </FilterContainerWrapper>
    )
}

const FilterContainerWrapper = styled.div``
const FilterResults = styled.div``


export default FilterContainer
