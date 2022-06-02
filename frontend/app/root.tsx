import { setupTwind } from "../twind.config";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { tw } from "twind/css";
import "./styles/global.css";

setupTwind();

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

// export function links() {
//   return [{ rel: "stylesheet", href: styles }];
// }

export default function App() {
  return (
    <html lang="en" className={tw`h-full`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body className={tw`h-full`}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
        <div id="portal"></div>
      </body>
    </html>
  );
}
