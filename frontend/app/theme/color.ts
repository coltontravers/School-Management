import { tw } from "twind/css";
import { ThemeConfig } from ".";

export const backgroundColors: Partial<ThemeConfig<"backgroundColor">> = {
  "gray.main": tw`bg-gray-main`,
  "gray.100": tw`bg-gray-100`,
  "gray.200": tw`bg-gray-200`,
  "gray.300": tw`bg-gray-300`,
  "gray.400": tw`bg-gray-400`,
  "primary.main": tw`bg-primary-main`,
  "primary.100": tw`bg-primary-100`,
  "primary.200": tw`bg-primary-200`,
  "primary.300": tw`bg-primary-300`,
  "primary.400": tw`bg-primary-400`,
  "primary.500": tw`bg-primary-500`,
  "secondary.main": tw`bg-secondary-main`,
  "secondary.100": tw`bg-secondary-100`,
  "secondary.200": tw`bg-secondary-200`,
  "secondary.300": tw`bg-secondary-300`,
  "secondary.400": tw`bg-secondary-400`,
  "secondary.500": tw`bg-secondary-500`,
  white: tw`bg-white`,
  black: tw`bg-black`,
  "success.main": tw`bg-success-main`,
  "success.100": tw`bg-success-100`,
  "success.200": tw`bg-success-200`,
  "success.300": tw`bg-success-300`,
  "success.400": tw`bg-success-400`,
  "success.500": tw`bg-success-500`,
  "warning.main": tw`bg-warning-main`,
  "warning.100": tw`bg-warning-100`,
  "warning.200": tw`bg-warning-200`,
  "warning.300": tw`bg-warning-300`,
  "warning.400": tw`bg-warning-400`,
  "warning.500": tw`bg-warning-500`,
  "danger.main": tw`bg-danger-main`,
  "danger.100": tw`bg-danger-100`,
  "danger.200": tw`bg-danger-200`,
  "danger.300": tw`bg-danger-300`,
  "danger.400": tw`bg-danger-400`,
  "danger.500": tw`bg-danger-500`,
  transparent: tw`bg-transparent`,
};

export const strokeColors: Partial<ThemeConfig<"stroke">> = {
  "gray.main": tw`stroke-gray-main`,
  "gray.100": tw`stroke-gray-100`,
  "gray.200": tw`stroke-gray-200`,
  "gray.300": tw`stroke-gray-300`,
  "gray.400": tw`stroke-gray-400`,
  "primary.main": tw`stroke-primary-main`,
  "primary.100": tw`stroke-primary-100`,
  "primary.200": tw`stroke-primary-200`,
  "primary.300": tw`stroke-primary-300`,
  "primary.400": tw`stroke-primary-400`,
  "primary.500": tw`stroke-primary-500`,
  "secondary.main": tw`stroke-secondary-main`,
  "secondary.100": tw`stroke-secondary-100`,
  "secondary.200": tw`stroke-secondary-200`,
  "secondary.300": tw`stroke-secondary-300`,
  "secondary.400": tw`stroke-secondary-400`,
  "secondary.500": tw`stroke-secondary-500`,
  white: tw`stroke-white`,
  black: tw`stroke-black`,
  "success.main": tw`stroke-success-main`,
  "success.100": tw`stroke-success-100`,
  "success.200": tw`stroke-success-200`,
  "success.300": tw`stroke-success-300`,
  "success.400": tw`stroke-success-400`,
  "success.500": tw`stroke-success-500`,
  "warning.main": tw`stroke-warning-main`,
  "warning.100": tw`stroke-warning-100`,
  "warning.200": tw`stroke-warning-200`,
  "warning.300": tw`stroke-warning-300`,
  "warning.400": tw`stroke-warning-400`,
  "warning.500": tw`stroke-warning-500`,
  "danger.main": tw`stroke-danger-main`,
  "danger.100": tw`stroke-danger-100`,
  "danger.200": tw`stroke-danger-200`,
  "danger.300": tw`stroke-danger-300`,
  "danger.400": tw`stroke-danger-400`,
  "danger.500": tw`stroke-danger-500`,
  transparent: tw`stroke-transparent`,
};

export type BackgroundColor = keyof typeof backgroundColors;
export type StrokeColor = keyof typeof strokeColors;
