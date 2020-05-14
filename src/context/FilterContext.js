import React, { useReducer } from "react"

let reducer = (state, {filter, filterValue}) => {
    return {
        ...state,
        [filter]: filterValue
    }
}

const initialState = {
    showOnline: false,
    showInEdinburgh: false,
    showStudent: false,
    showTeacher: false,
    showIntensive: false,
    showRegular: false,
    showDropIn: false
}

const FilterContext = React.createContext(initialState);

console.log("In context", initialState)

function FilterProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export { FilterContext, FilterProvider };