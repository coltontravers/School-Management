import { setupTwind } from "../twind.config";
import "../app/styles/global.css";

setupTwind();

if (typeof global.process === "undefined") {
  const { worker } = require("../app/mocks/browser");
  worker.start();
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
};
