import React from 'react'
import { FilterProvider } from "./src/context/FilterContext"
import { NavProvider } from "./src/context/NavContext"


export const wrapRootElement = ({ element }) => (
  <FilterProvider>
    <NavProvider>
      {element}
    </NavProvider>
</FilterProvider>
)