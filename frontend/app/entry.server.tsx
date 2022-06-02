import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";
import { setup } from "twind";
import { virtualSheet, getStyleTag } from "twind/sheets";
import { QueryWrapper } from "./api";

const sheet = virtualSheet();
setup({ sheet });

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  sheet.reset();
  const styleTag = getStyleTag(sheet);

  let markup = renderToString(
    <QueryWrapper>
      <RemixServer context={remixContext} url={request.url} />
    </QueryWrapper>
  );

  markup = markup.replace("__STYLES__", styleTag);

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
