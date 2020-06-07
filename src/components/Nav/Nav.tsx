import React, { useContext, useState, useRef } from "react"
import {
  StyledNav,
  StyledBurgerButton,
  StyledBurgerButtonIcon,
  StyledNavListGroup,
  StyledNavListItem,
} from "./NavStyles"
import { NavContext } from "../../context/NavContext"
import navMenuData from "../../data/nav.json"
import { useOnClickOutside } from "../../customHooks/useOnClickOutside"

const Nav = () => {
  // mobile menu is full-width, so no need for global state to recognise outside clicks
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  return (
    <StyledNav>
      <BurgerButton
        isMenuExpanded={isMenuExpanded}
        setIsMenuExpanded={setIsMenuExpanded}
      ></BurgerButton>
      <NavListGroup isMenuExpanded={!isMenuExpanded}>
        {navMenuData.map((item, index) => (
          <NavListItem {...item} key={index} />
        ))}
      </NavListGroup>
    </StyledNav>
  )
}

const BurgerButton = ({ isMenuExpanded, setIsMenuExpanded }) => {
  return (
    <StyledBurgerButton
      aria-expanded={isMenuExpanded}
      onClick={() => setIsMenuExpanded(!isMenuExpanded)}
    >
      <span className="visually-hidden">Site Navigation Menu</span>
      <StyledBurgerButtonIcon>
        <span></span>
        <span></span>
        <span></span>
      </StyledBurgerButtonIcon>
    </StyledBurgerButton>
  )
}

const NavListGroup = React.forwardRef(({ isMenuExpanded, children }, ref) => {
  return (
    <StyledNavListGroup isMenuExpanded={isMenuExpanded} ref={ref}>
      {children}
    </StyledNavListGroup>
  )
})

const NavListItem = ({ name, id, link, items = [] }) => {
  const hasSubGroup = items && items.length > 0
  const { state, dispatch } = useContext(NavContext)
  const ref = useRef()
  useOnClickOutside(ref, () => dispatch({ type: "close" }), state)
  return (
    <StyledNavListItem
      hasSubGroup={hasSubGroup}
      isDropDownExpanded={state.isDropDownExpanded[id]}
    >
      {hasSubGroup ? (
        <>
          <a
            href={link}
            aria-haspopup={hasSubGroup}
            aria-expanded={state.isDropDownExpanded[id]}
            onClick={() => dispatch({ type: "toggle", payload: id })}
          >
            {name}
          </a>

          <NavListGroup isMenuExpanded={state.isDropDownExpanded[id]} ref={ref}>
            {items.map((item, index) => (
              <NavListItem {...item} key={index} />
            ))}
          </NavListGroup>
        </>
      ) : (
        <a href={link}>{name}</a>
      )}
    </StyledNavListItem>
  )
}

export default Nav
