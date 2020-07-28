import React, { useReducer } from "react";


let reducer = (state, action) => { 
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        isDropDownExpanded: {
          parentJL: false,
          parentJT: false,
          parentAU: false,
          [action.payload]: !state.isDropDownExpanded[action.payload]
        }
      };
    case "close":
      return {
        ...state,
        isDropDownExpanded: {
          parentJL: false,
          parentJT: false,
          parentAU: false,
        }
      };
    default:
      return;
  }
};


const initialState = {
  isDropDownExpanded: {
    parentJL: false,
    parentJT: false,
    parentAU: false
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
