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

// ALIGNMENT

export const setFlex = ({ x = "center", y = "center" } = {}) => {
    return `display: flex;align-items:${y};justify-content:${x}`
  }


