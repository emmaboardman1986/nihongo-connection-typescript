import React, { useContext } from "react"
import {
  StyledNav,
  StyledBurgerButton,
  StyledBurgerButtonIcon,
  StyledNavListGroup,
  StyledNavListItem,
} from "./NavStyles"
import { NavContext } from "../../context/NavContext"
import navMenuData from "../../data/nav.json"

const Nav = React.forwardRef((props, ref) => {
  const { state, dispatch } = useContext(NavContext)
  // const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  return (
    <StyledNav ref={ref}>
      <BurgerButton
        isMenuExpanded={state.isMenuExpanded}
        setIsMenuExpanded={() => dispatch({ type: "menu" })}
      ></BurgerButton>
      <NavListGroup isMenuExpanded={!state.isMenuExpanded}>
        {navMenuData.map((item, index) => (
          <NavListItem {...item} key={index} />
        ))}
      </NavListGroup>
    </StyledNav>
  )
})

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

const NavListGroup = ({ isMenuExpanded, children }) => {
  const { state } = useContext(NavContext)
  return (
    <StyledNavListGroup
      isMenuExpanded={isMenuExpanded}
      // required to control height for parent nav when child nav is open
      // TODO: refactor ul height - must be a better way?
      isDropDownExpanded={
        state.isDropDownExpanded["parentAU"] ||
        state.isDropDownExpanded["parentJL"] ||
        state.isDropDownExpanded["parentJT"]
      }
    >
      {children}
    </StyledNavListGroup>
  )
}

const NavListItem = ({ name, id, link, items = [] }) => {
  const hasSubGroup = items && items.length > 0
  const { state, dispatch } = useContext(NavContext)
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

          <NavListGroup isMenuExpanded={state.isDropDownExpanded[id]}>
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
