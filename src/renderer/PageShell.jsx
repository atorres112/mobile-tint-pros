import React from "react";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import "../styles.css";

export function PageShell({ pageContext }) {
  const { Page } = pageContext;
  return (
    <HelmetProvider>
      <Page {...pageContext} />
    </HelmetProvider>
  );
}
