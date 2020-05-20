import React, { useContext, useState } from "react"
import styled from "styled-components"
import {
  NavWrapperStyles,
  NavListGroupWrapperStyles,
  NavListItemWrapperStyles,
  NavListItemHasChildStyles,
  BurgerButtonWrapperStyles,
  BurgerButtonSpanWrapperStyles,
} from "./NavStyles"
import { NavContext } from "../../context/NavContext"

const Nav = React.forwardRef((props, ref) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)
  const navMenuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Explore Classes",
      link: "/explore",
    },
    {
      name: "For Japanese Learners",
      link: "#",
      id: "parentJL",
      items: [
        {
          name: "Beginner's Level 1",
          link: "/beginners-level-1",
        },
        {
          name: "Beginner's Level 2",
          link: "/beginners-level-2",
        },
        {
          name: "Beginner's Level 3",
          link: "/beginners-level-3",
        },
        {
          name: "Friday Study Club",
          link: "/friday-study-club",
        },
        {
          name: "1:1 Lessons",
          link: "/one-to-one-lessons",
        },
        {
          name: "JLPT Bootcamp",
          link: "/jlpt-bootcamp",
        },
        {
          name: "Beginner's Bootcamp",
          link: "/beginners-bootcamp",
        },
        {
          name: "Nihongo Confidence",
          link: "/nihongo-confidence",
        },
        {
          name: "Nihongo Confidence (Lite)",
          link: "/nihongo-confidence-lite",
        },
      ],
    },
    {
      name: "For Japanese Teachers",
      id: "parentJT",
      link: "#",
      items: [
        {
          name: "Business Coaching",
          link: "/teacher-coaching",
        },
      ],
    },
    {
      name: "Reviews",
      link: "/reviews",
    },
    {
      name: "Get in Touch",
      link: "/contact",
    },
  ]

  return (
    <NavWrapper ref={ref}>
      <BurgerButton isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded}></BurgerButton>
      <NavListGroup hidden={!isMenuExpanded}>
        {navMenuItems.map((item, index) => (
          <NavListItem {...item} key={index} />
        ))}
      </NavListGroup>
    </NavWrapper>
  )
})

const NavWrapper = styled.nav`
  ${NavWrapperStyles};
`

const BurgerButton = ({ isMenuExpanded, setIsMenuExpanded }) => {
  return (
    <BurgerButtonWrapper
      aria-expanded={isMenuExpanded}
      onClick={() => setIsMenuExpanded(!isMenuExpanded)}
      aria-label="Open Site Navigation Menu"
    >
      <BurgerButtonSpanWrapper>
        <span></span>
        <span></span>
        <span></span>
      </BurgerButtonSpanWrapper>
    </BurgerButtonWrapper>
  )
}

const BurgerButtonWrapper = styled.button`
  ${BurgerButtonWrapperStyles}
`

const BurgerButtonSpanWrapper = styled.div`
  ${BurgerButtonSpanWrapperStyles};
`

const NavListGroup = ({ hidden, children }) => {
  return <NavListGroupWrapper hidden={hidden}>{children}</NavListGroupWrapper>
}

const NavListGroupWrapper = styled.ul`
  ${NavListGroupWrapperStyles};
`

const NavListItem = ({ name, id, link, items = [] }) => {
  const hasSubGroup = items && items.length > 0
  const { state, dispatch } = useContext(NavContext)
  return (
    <NavListItemWrapper hasSubGroup={hasSubGroup}>
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

          <NavListGroup hidden={!state.isDropDownExpanded[id]}>
            {items.map((item, index) => (
              <NavListItem {...item} key={index} />
            ))}
          </NavListGroup>
        </>
      ) : (
        <a href={link}>{name}</a>
      )}
    </NavListItemWrapper>
  )
}

const NavListItemWrapper = styled.li`
  ${NavListItemWrapperStyles}
  ${props => props.hasSubGroup && NavListItemHasChildStyles};
`

export default Nav
