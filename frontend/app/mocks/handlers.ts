import { graphql } from "msw";
import { apiEndpoint } from "~/constants/api";

const api = graphql.link(apiEndpoint);

export const handlers = [
  api.query("GetMessageGroups", (req, res, ctx) => res(ctx.data([]))),
];
