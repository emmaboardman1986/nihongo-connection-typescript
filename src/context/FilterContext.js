import React, { useReducer } from "react"


const reducer = (state = {}, action) => {

    switch (action.type) {
        case "toggle":
            let { option: { dataName }, filterCategoryKey } = action.payload;
            return {
                ...state,
                [filterCategoryKey]: {
                    ...state[filterCategoryKey],
                    [dataName]: !state[filterCategoryKey][dataName]
                }
            }
        default:
            return state
    }
}

const initialState = {
    class_target: {
        "learning-japanese": false,
        "teaching-japanese": true,
    },
    class_location: {
        "show-online": false,
        "show-in-edinburgh": false,
    },
    class_learning_style: {
        "intensive-learning": false,
        "regular-classes": false,
        "drop-in-sessions": false
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