import { tw } from "twind/css";
import { ThemeConfig } from ".";

export const fontSizes: ThemeConfig<"fontSize"> = {
  caption: tw`text-caption`,
  body1: tw`text-body1`,
  body2: tw`text-body2`,
  h1: tw`text-h1`,
  h2: tw`text-h2`,
  h3: tw`text-h3`,
  h4: tw`text-h4`,
  h5: tw`text-h5`,
};

export const fontWeights: ThemeConfig<"fontWeight"> = {
  xLight: tw`font-xLight`,
  light: tw`font-light`,
  base: tw`font-base`,
  medium: tw`font-medium`,
  semiBold: tw`font-semiBold`,
  bold: tw`font-bold`,
  xBold: tw`font-xBold`,
};

export const textColors: Partial<ThemeConfig<"textColor">> = {
  "gray.main": tw`text-gray-main`,
  "gray.100": tw`text-gray-100`,
  "gray.200": tw`text-gray-200`,
  "gray.300": tw`text-gray-300`,
  "gray.400": tw`text-gray-400`,
  "primary.main": tw`text-primary-main`,
  "primary.100": tw`bg-primary-100`,
  "primary.200": tw`bg-primary-200`,
  "primary.300": tw`bg-primary-300`,
  "primary.400": tw`bg-primary-400`,
  "primary.500": tw`bg-primary-500`,
  "primary.600": tw`bg-primary-600`,
  "primary.700": tw`bg-primary-700`,
  "secondary.main": tw`text-secondary-main`,
  "secondary.100": tw`text-secondary-100`,
  "secondary.200": tw`text-secondary-200`,
  "secondary.300": tw`text-secondary-300`,
  "secondary.400": tw`text-secondary-400`,
  "secondary.500": tw`text-secondary-500`,
  "secondary.600": tw`text-secondary-600`,
  "secondary.700": tw`text-secondary-700`,
  white: tw`text-white`,
  black: tw`text-black`,
  "success.main": tw`text-success-main`,
  "success.100": tw`text-success-100`,
  "success.200": tw`text-success-200`,
  "success.300": tw`text-success-300`,
  "success.400": tw`text-success-400`,
  "success.500": tw`text-success-500`,
  "success.600": tw`text-success-600`,
  "success.700": tw`text-success-700`,
  "warning.main": tw`text-warning-main`,
  "warning.100": tw`text-warning-100`,
  "warning.200": tw`text-warning-200`,
  "warning.300": tw`text-warning-300`,
  "warning.400": tw`text-warning-400`,
  "warning.500": tw`text-warning-500`,
  "warning.600": tw`text-warning-600`,
  "warning.700": tw`text-warning-700`,
  "danger.main": tw`text-danger-main`,
  "danger.100": tw`text-danger-100`,
  "danger.200": tw`text-danger-200`,
  "danger.300": tw`text-danger-300`,
  "danger.400": tw`text-danger-400`,
  "danger.500": tw`text-danger-500`,
  "danger.600": tw`text-danger-600`,
  "danger.700": tw`text-danger-700`,
  transparent: tw`text-transparent`,
  inherit: tw`text-inherit`,
};

export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeights;
export type TextColor = keyof typeof textColors;
