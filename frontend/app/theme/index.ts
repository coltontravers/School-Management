import { TW } from "twind/css";
import { Paths } from "../types/misc";
import Theme from "../types/theme";
export * from "./font";
export * from "./color";
export * from "./spacing";

export type ThemeConfig<Option extends keyof Theme> = {
  [key in Paths<Theme[Option]>]: string;
};
