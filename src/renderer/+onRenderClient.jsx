import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell.jsx";

export { onRenderClient };

function onRenderClient(pageContext) {
  hydrateRoot(
    document.getElementById("root"),
    <React.StrictMode>
      <PageShell pageContext={pageContext} />
    </React.StrictMode>
  );
}
