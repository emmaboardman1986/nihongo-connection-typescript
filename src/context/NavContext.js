import React, { useReducer } from "react";


let reducer = (state, action) => {
  console.log(action.payload);
  console.log(state);
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
          3: false,
          4: false
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

console.log(initialState);

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
