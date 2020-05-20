import React, { useReducer } from "react";


let reducer = (state, action) => { 
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        isDropDownExpanded: {
          ...state.isDropDownExpanded,
          [action.payload]: !state.isDropDownExpanded[action.payload]
        }
      };
    case "close":
      return {
        ...state,
        isDropDownExpanded: {
          parentJL: false,
          parentJT: false
        }
      };
    default:
      return;
  }
};


const initialState = {
  isDropDownExpanded: {
    parentJL: false,
    parentJT: false
  }
}


const NavContext = React.createContext(initialState);

function NavProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NavContext.Provider value={{ state, dispatch }}>
      {props.children}
    </NavContext.Provider>
  );
}

export { NavContext, NavProvider };