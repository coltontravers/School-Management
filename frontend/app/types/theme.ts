import theme from "../theme/theme";

// Want this type to be able to be "colors.brand" and brand could be {light: "", normal: "", dark: ""}. And this type would get the keyof typeof of that final object.
// type Theme<ThemeItem extends keyof typeof theme> =
//   keyof typeof theme[ThemeItem];

type Theme = typeof theme;

export type Spacing = keyof Theme["spacing"];
export type Width = keyof Theme["width"];
export type BackgroundColor = keyof Theme["backgroundColor"];

// export type FontFamily = keyof Theme["fontFamily"];
// export type FontSize = keyof Theme["fontSize"];
// export type FontWeight = keyof Theme["fontWeight"];

export type TextColor = keyof Theme["textColor"];

export interface SpacingProps {
  m?: Spacing;
  mr?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
  mt?: Spacing;
  p?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
  pt?: Spacing;
  mx?: Spacing;
  my?: Spacing;
  px?: Spacing;
  py?: Spacing;
}

export default Theme;
