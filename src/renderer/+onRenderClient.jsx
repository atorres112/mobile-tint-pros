import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell.jsx";

export { render };

function render(pageContext) {
  hydrateRoot(
    document.getElementById("root"),
    <React.StrictMode>
      <PageShell pageContext={pageContext} />
    </React.StrictMode>
  );
}
