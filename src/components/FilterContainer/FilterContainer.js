import React, { useContext } from "react"
import Filter from "../Filter"
import CardContainer from "../CardContainer"
import BodyText from "../BodyText"
import Heading from "../Heading"
import VerticalSpacing from "../utilities/VerticalSpacing"
import HighlightPill from "../HighlightPill"
import Emphasis from "../Emphasis"
import MailChimp from "../MailChimp/MailChimp"
import Card from "../Card"
import AriaLiveRegion from "../AriaLiveRegion"
import FlexContainer from "../utilities/FlexContainer"
import { StyledFilterContainer, StyledFilterResults } from "./FilterContainerStyles"

import { FilterContext } from "../../context/FilterContext"
import filterData from "../../data/filters.json"


const FilterContainer = ({ classes }) => {

    const { state, dispatch } = useContext(FilterContext);

    let dataNameDisplayNameMap = {
        "teaching-japanese": "Teaching Japanese",
        "learning-japanese": "Learning Japanese",
        "show-online": "Online",
        "show-in-edinburgh": "In Edinburgh",
        "intensive-learning": "Intensive Learning",
        "regular-classes": "Regular Classes",
        "drop-in-sessions": "Drop-in Sessions"
    }

    const collectTrueFilters = () => {
        let mappedTrueFilters = {}
        for (let filterCategory in state) {
            mappedTrueFilters[filterCategory] = [];
            for (let filterOption in state[filterCategory]) {
                if (state[filterCategory][filterOption]) {
                    mappedTrueFilters[filterCategory].push(dataNameDisplayNameMap[filterOption])
                }
            }
        }
        return mappedTrueFilters;
    };

    const checkForFilters = () => {
        let trueFilters = Object.values(collectTrueFilters()).filter(value => (
            value.length > 0))
        return trueFilters;
    }


    const returnFilterMatches = (filter, filterGroup, classes) => {
        let filterGroupResults = [];
        let filterGroupArray = filter[filterGroup];
        if (filterGroupArray.length > 0) {
            filterGroupResults = classes.filter(classItem => {
                return filterGroupArray.includes(classItem.node.data[filterGroup])
            })
        }
        else {
            filterGroupResults = classes;
        }
        return filterGroupResults;
    }


    // TODO: convert to typescript
    // class_target: {
    //     "learning-japanese": false,
    //     "teaching-japanese": false,
    // },
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
        <StyledFilterContainer activeFilters={checkForFilters()}>
            <Heading element="h2" className="visually-hidden">Class Filters</Heading>

            <Filter filters={filterData}>

            </Filter>

            <StyledFilterResults >
                <VerticalSpacing size={{ _: "baseTight" }}></VerticalSpacing>
                <Heading element="h2" className="visually-hidden">Class List</Heading>

                <FlexContainer justifyContent={{ _: "space-between" }}>
                    <AriaLiveRegion role="status" ariaLive="polite">
                        <BodyText>Showing <strong>{filteredClasses.length === classes.length ? "all" : filteredClasses.length}</strong> class{filteredClasses.length !== 1 ? "es" : null}:</BodyText>
                    </AriaLiveRegion>
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

            </StyledFilterResults>
        </StyledFilterContainer>
    )
}



export default FilterContainer
