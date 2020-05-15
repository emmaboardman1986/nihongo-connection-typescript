import React, { useReducer } from "react"


const reducer = (state, action) => {
    let categoryFilter = state.filters.find(filter => filter.category === action.type);
    switch (action.type) {
        case "location":
            // update state filter object
            // apply location filter 
            console.log("location");
            console.log(action.payload);


            return {
                ...state,
                filters: state.filters.map(
                    (filter, i) => filter.category === action.type ? {
                        ...filter,
                        options: state.filters[i].options.map(
                            (option) => option.name === action.payload.name ? {
                                ...option,
                                value: !option.value
                            } : { ...option }
                        )
                    } : { ...filter }
                )
            }
        case "no_filter":
            return { ...state, classes: action.payload };
    }
}


const initialState = {
    filters: [
        {
            category: "target",
            displayName: "I am...",
            options: [
                {
                    name: "showStudent",
                    value: false,
                    displayName: "Learning Japanese"
                },
                {
                    name: "showTeacher",
                    value: false,
                    displayName: "Teaching Japanese"
                },
            ]
        },
        {
            category: "location",
            displayName: "I want to take classes...",
            options: [
                {
                    name: "showOnline",
                    value: false,
                    displayName: "Online"
                }, {
                    name: "showInEdinburgh",
                    value: false,
                    displayName: "In Edinburgh"
                },
            ]
        },
        {
            category: "learning-style",
            displayName: "I would prefer...",
            options: [
                {
                    name: "showIntensive",
                    value: false,
                    displayName: "Intensive Learning"
                },
                {
                    name: "showRegular",
                    value: false,
                    displayName: "Regular Classes"
                },
                {
                    name: "showDropIn",
                    value: false,
                    displayName: "Drop-in Sessions"
                },
            ]
        }
    ],
    classes: []
}

const FilterContext = React.createContext(initialState);

function FilterProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const applyFilter = (classes, filter) => {
        console.log("enter method", classes);
        const {
            showStudent,
            showTeacher,
            showOnline,
            showInEdinburgh,
            showRegular,
            showIntensive,
            showDropIn,
        } = filter

        let resultStudent = []
        let resultTeacher = []
        let resultOnline = []
        let resultEdinburgh = []
        let resultIntensive = []
        let resultRegular = []
        let resultDropIn = []
        if (showStudent) {
            resultStudent = classes.filter(
                classItem => classItem.node.data.class_target === "Student"
            )
        }
        if (showTeacher) {
            resultStudent = classes.filter(
                classItem => classItem.node.data.class_target === "Teacher"
            )
        }
        if (showOnline) {
            resultOnline = classes.filter(
                classItem =>
                    classItem.node.data.class_location[0].class_location_option ===
                    "Online"
            )
        }
        if (showInEdinburgh) {
            resultEdinburgh = classes.filter(
                classItem =>
                    classItem.node.data.class_location[0].class_location_option ===
                    "In Edinburgh"
            )
        }
        if (showIntensive) {
            resultStudent = classes.filter(
                classItem => classItem.node.data.class_learning_style === "Intensive"
            )
        }
        if (showRegular) {
            resultStudent = classes.filter(
                classItem => classItem.node.data.class_learning_style === "Regular"
            )
        }
        if (showDropIn) {
            resultStudent = classes.filter(
                classItem => classItem.node.data.class_learning_style === "Drop-in"
            )
        }

        let set = new Set(
            [
                ...resultStudent,
                ...resultTeacher,
                ...resultOnline,
                ...resultEdinburgh,
                ...resultStudent,
                ...resultIntensive,
                ...resultRegular,
                ...resultDropIn,
            ]
        )

        let uniqueResults = [...set];
        if (uniqueResults.length) {
            console.log("filtered", uniqueResults)
            return uniqueResults;
        } else {
            return classes
        }
    }



    return (
        <FilterContext.Provider value={{ state, dispatch, applyFilter }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export { FilterContext, FilterProvider };