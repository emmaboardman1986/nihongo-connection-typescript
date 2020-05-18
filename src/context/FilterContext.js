import React, { useReducer } from "react"


const reducer = (state = {}, action) => {
    let { filterCategory, option } = action.payload;
    let [optionCategory, optionDetails] = option;
    switch (action.type) {
        case "toggle":
            return {
                ...state,
                [filterCategory]: {
                    ...state[filterCategory],
                    options: {
                        ...state[filterCategory].options,
                        [optionCategory]: {
                            ...state[filterCategory].options[optionCategory],
                            value: !optionDetails.value
                        }

                    }
                }
            }
        default:
            return state
    }

}

const initialState = {
    target: {
        displayName: "I am...",
        options: {
            showLearning: {
                value: false,
                displayName: "Learning Japanese"
            },
            showTeacher: {
                value: false,
                displayName: "Teaching Japanese"
            }
        }
    },
    location: {
        displayName: "I want to take classes...",
        options: {
            showOnline: {
                value: false,
                displayName: "Online"
            },
            showInEdinburgh: {
                value: true,
                displayName: "In Edinburgh"
            }
        }
    },
    format: {
        displayName: "I would prefer..",
        options: {
            showIntensive: {
                value: false,
                displayName: "Intensive Learning"
            },
            showRegular: {
                value: true,
                displayName: "Regular Classes"
            },
            showDropIn: {
                value: false,
                displayName: "Drop-in Sessions"
            }
        }
    }
};

const FilterContext = React.createContext(initialState);

function FilterProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export { FilterContext, FilterProvider };