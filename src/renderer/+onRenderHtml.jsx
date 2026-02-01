import React from "react";
import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { PageShell } from "./PageShell.jsx";

export { onRenderHtml };

function onRenderHtml(pageContext) {
  const pageHtml = renderToString(
    <React.StrictMode>
      <PageShell pageContext={pageContext} />
    </React.StrictMode>
  );

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
