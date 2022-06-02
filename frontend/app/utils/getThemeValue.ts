import theme from "../theme/theme";
import { Paths } from "../types/misc";

export const getThemeValue = (themePath: Paths<typeof theme>) => {
  return themePath
    .split(".")
    .reduce((o, p) => o?.[p] ?? "", theme as unknown as string);
};

export default getThemeValue;
