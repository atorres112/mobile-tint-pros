import React from "react";
import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell.jsx";

export { render };

let root;

function render(pageContext) {
  const element = (
    <React.StrictMode>
      <PageShell pageContext={pageContext} />
    </React.StrictMode>
  );

  if (!root) {
    root = hydrateRoot(document.getElementById("root"), element);
  } else {
    root.render(element);
  }
}
