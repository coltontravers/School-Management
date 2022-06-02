import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import { QueryWrapper } from "./api";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

hydrate(
  <QueryWrapper>
    <RemixBrowser />
  </QueryWrapper>,
  document
);
