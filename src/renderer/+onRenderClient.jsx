import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell.jsx";

export { onRenderClient };

function onRenderClient(pageContext) {
  const container = document.getElementById("root");
  if (!container) return;

  if (!globalThis.__appRoot) {
    globalThis.__appRoot = hydrateRoot(
      container,
      <React.StrictMode>
        <PageShell pageContext={pageContext} />
      </React.StrictMode>
    );
    container.dataset.hydrated = "true";
    return;
  }

  globalThis.__appRoot.render(
    <React.StrictMode>
      <PageShell pageContext={pageContext} />
    </React.StrictMode>
  );
}
