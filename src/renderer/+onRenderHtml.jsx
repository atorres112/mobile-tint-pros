import React from "react";
import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { PageShell } from "./PageShell.jsx";

export { onRenderHtml };

function onRenderHtml(pageContext) {
  const helmetContext = {};
  const pageHtml = renderToString(
    <React.StrictMode>
      <PageShell pageContext={pageContext} helmetContext={helmetContext} />
    </React.StrictMode>
  );
  const helmet = helmetContext.helmet;

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(helmet?.title.toString() ?? "")}
        ${dangerouslySkipEscape(helmet?.priority.toString() ?? "")}
        ${dangerouslySkipEscape(helmet?.meta.toString() ?? "")}
        ${dangerouslySkipEscape(helmet?.link.toString() ?? "")}
        ${dangerouslySkipEscape(helmet?.base.toString() ?? "")}
        ${dangerouslySkipEscape(helmet?.style.toString() ?? "")}
        ${dangerouslySkipEscape(helmet?.script.toString() ?? "")}
        ${dangerouslySkipEscape(helmet?.noscript.toString() ?? "")}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
