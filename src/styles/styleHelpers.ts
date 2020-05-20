import { css } from "styled-components"

// SIZING
export const calcRem = (pixelValue) => {
  return pixelValue / 16 + "rem";
}

// FONTS
export const setFont = {
  fontPrimaryMedium: '"Poppins-Medium", sans-serif',
  fontPrimaryRegular: '"Poppins-Regular", sans-serif',
  fontSecondaryBlack: '"Axiforma-Black", sans-serif',
}

export const setFontSize = {
  xSmall: calcRem(12),
  small: calcRem(14),
  medium: calcRem(16),
  large: calcRem(18),
  xLarge: calcRem(20),
  x2Large: calcRem(24),
  x3Large: calcRem(30),
  x4Large: calcRem(36)
}

export const setSpacing = {
  none: "0",
  xTight: calcRem(4),
  tight: calcRem(8),
  baseTight: calcRem(12),
  base: calcRem(16),
  loose: calcRem(20),
  xLoose: calcRem(32)
}

// COLORS
export const setColor = {
  brandPrimary: {
    100: "hsl(220, 85%, 98%)",
    200: "hsl(220, 94%, 85%)",
    300: "hsl(220, 100%, 65%)",
    400: "hsl(220, 85%, 54%)",
    500: "hsl(220, 85%, 45%)",
    600: "hsl(220, 95%, 35%)",
    700: "hsl(220, 84%, 25%)",
    800: "hsl(220, 84%, 15%)",
    900: "hsl(220, 85%, 5%)"
  },
  brandSecondary: {
    100: "hsl(357, 85%, 95%)",
    200: "hsl(357, 94%, 85%)",
    300: "hsl(357, 100%, 65%)",
    400: "hsl(357, 85%, 54%)",
    500: "hsl(357, 85%, 45%)",
    600: "hsl(357, 95%, 35%)",
    700: "hsl(357, 84%, 25%)",
    800: "hsl(357, 84%, 15%)",
    900: "hsl(357, 85%, 5%)"
  },
  brandMonochrome: {
    0: "#fff",
    100: "hsl(0, 3%, 85%)",
    200: "hsl(0, 2%, 75%)",
    300: "hsl(0, 2%, 65%)",
    400: "hsl(0, 2%, 55%)",
    500: "hsl(0, 2%, 45%)",
    600: "hsl(0, 2%, 35%)",
    700: "hsl(0, 2%, 25%)",
    800: "hsl(0, 3%, 15%)",
    900: "hsl(0, 4%, 5%)"
  },

}



// BORDERS & SHADOWS
export const setBorder = {
  borderRadius: "10px",
  borderSmTransparent: "2px solid transparent",
  borderSmBlack: `2px solid ${setColor.brandMonochrome[900]}`,
  borderSmPrimary: `2px solid ${setColor.brandPrimary[700]}`,
}


export const setShadow = {
  elevate: {
    0: `2px 2px 1px ${setColor.brandMonochrome[800]}`,
    100: `4px 4px 1px  ${setColor.brandMonochrome[800]}`
  },
  depress: {
    100: `2px 2px 1px ${setColor.brandMonochrome[800]}`
  }
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