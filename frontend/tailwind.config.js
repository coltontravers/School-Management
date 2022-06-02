const spacingBase = "3.5rem";

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      warning: {
        700: "#B84E01",
        600: "#D05902",
        main: "#E36509",
        500: "#E36509",
        400: "#E07900",
        300: "#FFA63D",
        200: "#FFC47E",
        100: "#FFDFBA",
      },
      success: {
        700: "#0B631D",
        600: "#237D35",
        main: "#3B8D4C",
        500: "#3B8D4C",
        400: "#5AA469",
        300: "#7CC08A",
        200: "#A7E2B3",
        100: "#D3FFDC",
      },
      danger: {
        700: "#980000",
        600: "#BB0C0C",
        main: "#D62323",
        500: "#D62323",
        400: "#EC4545",
        300: "#FC6060",
        200: "#FF9090",
        100: "#FFCDCD",
      },
      gray: {
        main: "#656565",
        400: "#656565",
        300: "#A6A6A6",
        200: "#D2D2D2",
        100: "#F0F0F0",
      },
      primary: {
        700: "#3200C6",
        600: "#3703D3",
        main: "#3A00E9",
        500: "#3A00E9",
        400: "#4D15F4",
        300: "#9887FF",
        200: "#BDB2FF",
        100: "#DED8FF",
      },
      secondary: {
        700: "#0183E2",
        600: "#0692F8",
        main: "#26A4FF",
        500: "#26A4FF",
        400: "#43B0FF",
        300: "#77C6FF",
        200: "#9DD6FF",
        100: "#C1E5FF",
      },
      inherit: "inherit",
    },
    fontWeight: {
      xLight: "100",
      light: "200",
      base: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
      xBold: "800",
    },
    fontSize: {
      caption: "0.813rem",
      body1: "1rem",
      body2: "0.875rem",
      h5: "1.2rem",
      h4: "1.438rem",
      h3: "1.725rem",
      h2: "2.075rem",
      h1: "2.488rem",
    },
    spacing: {
      0: "0",
      1: `calc(${spacingBase} - 3.25rem)`, // 4px
      2: `calc(${spacingBase} - 3rem)`, // 8px
      3: `calc(${spacingBase} - 2.5rem)`, // 16px
      4: `calc(${spacingBase} - 2rem)`, // 24px
      5: `calc(${spacingBase} - 1.5rem)`, // 32px
      6: `calc(${spacingBase} - 1rem)`, // 40px
      7: `calc(${spacingBase} - .5rem)`, // 48px
      8: spacingBase, // 56px
      9: `calc(${spacingBase} + .5rem)`, // 64px
      10: `calc(${spacingBase} + 1rem)`, // 72px
      11: `calc(${spacingBase} + 1.5rem)`, // 80px
      12: `calc(${spacingBase} + 2rem)`, // 88px
      13: `calc(${spacingBase} + 2.5rem)`, // 96px
      14: `calc(${spacingBase} + 3rem)`, // 104px
      15: `calc(${spacingBase} + 3.5rem)`, // 112px
      16: `calc(${spacingBase} + 5rem)`, // 120px
      17: `calc(${spacingBase} + 6.5rem)`,
      18: `calc(${spacingBase} + 8rem)`,
      19: `calc(${spacingBase} + 9.5rem)`,
      20: `calc(${spacingBase} + 11rem)`,
      21: `calc(${spacingBase} + 12.5rem)`,
      22: `calc(${spacingBase} + 14rem)`,
      23: `calc(${spacingBase} + 15.5rem)`,
      24: `calc(${spacingBase} + 17rem)`,
    },
    boxShadow: {
      lightXs: "0 0 1px 0px rgba(160,160,160,0.5)",
      lightSm: "0 0 2px 1px rgba(160,160,160,0.5)",
      lightMd: "0 0 4px 1px rgba(160,160,160,0.5)",
      lightLg: "0 0 6px 3px rgba(160,160,160,0.5)",
      normalXs: "0 0 1px 0px rgba(160,160,160,0.75)",
      normalSm: "0 0 2px 1px rgba(160,160,160,0.75)",
      normalMd: "0 0 4px 1px rgba(160,160,160,0.75)",
      normalLg: "0 0 6px 3px rgba(160,160,160,0.75)",
      darkXs: "0 0 1px 0px rgba(160,160,160)",
      darkSm: "0 0 2px 1px rgba(160,160,160)",
      darkMd: "0 0 4px 1px rgba(160,160,160)",
      darkLg: "0 0 6px 3px rgba(160,160,160)",
      outline: "0 0 0 2px rgba(160,160,160)",
      none: "none",
    },
    screens: {
      "2xs": "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    borderRadius: {
      0: "0",
      DEFAULT: `calc(${spacingBase} - 3.25rem)`,
      1: `calc(${spacingBase} - 3.25rem)`, // 4px
      2: `calc(${spacingBase} - 3rem)`, // 8px
      3: `calc(${spacingBase} - 2.5rem)`, // 16px
      4: `calc(${spacingBase} - 2rem)`, // 24px
      5: `calc(${spacingBase} - 1.5rem)`, // 32px
      6: `calc(${spacingBase} - 1rem)`, // 40px
      7: `calc(${spacingBase} - .5rem)`, // 48px
      full: "9999px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
    },
  },
  variants: {},
  plugins: [],
};
