import { ThemeConfig } from ".";
import getThemeValue from "../utils/getThemeValue";
import Theme from "../types/theme";

export const generateSpacing = ({
  m = 0,
  ml,
  mb,
  mr,
  mt,
  mx,
  my,
  p = 0,
  pl,
  pb,
  pr,
  pt,
  px,
  py,
}: SpacingProps) => {
  let css = "";

  if (m || ml || mb || mr || mt || mx || my) {
    css += `margin: ${getThemeValue(`margin.${mt ?? my ?? m}`)} ${getThemeValue(
      `margin.${mr ?? mx ?? m}`
    )} ${getThemeValue(`margin.${mb ?? my ?? m}`)} ${getThemeValue(
      `margin.${ml ?? mx ?? m}`
    )};`;
  }
  if (p || pl || pb || pr || pt || px || py) {
    css += `padding: ${getThemeValue(
      `padding.${pt ?? py ?? p}`
    )} ${getThemeValue(`padding.${pr ?? px ?? p}`)} ${getThemeValue(
      `padding.${pb ?? py ?? p}`
    )} ${getThemeValue(`padding.${pl ?? px ?? p}`)};`;
  }

  return css;
};

export type Spacing = keyof Theme["spacing"];

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

export type Height = keyof Theme["height"];
export type MinHeight = keyof Theme["minHeight"];
export type MaxHeight = keyof Theme["maxHeight"];
export type Width = keyof Theme["width"];
export type MinWidth = keyof Theme["minWidth"];
export type MaxWidth = keyof Theme["maxWidth"];

export interface AllHeight {
  height: Height;
  minHeight: MinHeight;
  maxHeight: MaxHeight;
}

export interface AllWidth {
  width: Width;
  minWidth: MinWidth;
  maxWidth: MaxWidth;
}

export type AllSpacing =
  | SpacingProps
  | AllHeight
  | AllWidth
  | { hide?: boolean };

export interface ScreenSpacing {
  screen: {
    sm?: AllSpacing;
    md?: AllSpacing;
    lg?: AllSpacing;
    xl?: AllSpacing;
    "2xl"?: AllSpacing;
  };
}
