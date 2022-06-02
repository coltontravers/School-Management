import { setup, strict } from "twind";
import { theme } from "./tailwind.config";

export const setupTwind = () =>
  setup({
    preflight: true,
    theme,
  });
