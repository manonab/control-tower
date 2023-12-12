import type { LinksFunction } from "@remix-run/node";
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import { Layout } from "./components/layout";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
const queryClient = new QueryClient();

export async function loader() {
  return json({
    ENV: {
      APP_ENV: process.env.APP_ENV,
    },
  });
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Control Tower</title>
        <Meta />
        <Links />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </Layout>
        </QueryClientProvider>
      </body>
    </html >
  );
}
