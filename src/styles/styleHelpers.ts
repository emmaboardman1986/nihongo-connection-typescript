import { css } from "styled-components"

// FONTS

export const setFont = {
    fontPrimaryMedium: '"Poppins-Medium", sans-serif',
    fontPrimaryRegular: '"Poppins-Regular", sans-serif',
  }

// COLORS

export const setColor = {
    brandBlack: "#000",
    brandWhite: "#fff",
    brandGrey: "#898484"
}

// BORDERS & SHADOWS

export const setBorder = {
  borderRadius: "6px",
  borderSmTransparent: "1px solid transparent",
  borderSmBlack: `1px solid ${setColor.brandBlack}`,
}

export const setBoxShadow = {
  clickAffordance: "6px 6px 0 0px",
  clickAffordanceHover: "6px 6px 0 3px"
}

// PADDING 

export const setPadding = {
  commonPadding: "1rem"
}

// MARGINS (temp)

export const setMargin = {
  bodyTextMargin: "1.25rem",
  headingTextMargin: "1.5rem"
}

// ALIGNMENT

export const setFlex = ({ align = "stretch", justify = "flex-start" } = {}) => {
    return `display: flex;align-items:${align};justify-content:${justify}`
  }

  export const setFlexDirection = ({ direction = "row" } = {}) => {
    return `flex-direction: ${direction};`
  }

// MEDIA QUERIES

export const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1600px",
}

export const breakpoint = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)

export const createMediaQueries = (propertyName, propObject) => {
  let mediaQueries = []
  Object.keys(propObject).forEach(key => {
    if (key !== "_") {
      mediaQueries.push(`
        @media (min-width: ${breakpoints[key]}) {
          ${propertyName}: ${propObject[key]};
        }
      `)
    }
  })
  return css`
    ${mediaQueries}
  `
}