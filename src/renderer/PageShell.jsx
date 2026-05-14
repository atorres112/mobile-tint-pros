import React from "react";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import "../styles.css";

export function PageShell({ pageContext, helmetContext }) {
  const { Page } = pageContext;
  return (
    <HelmetProvider context={helmetContext}>
      <Page {...pageContext} />
    </HelmetProvider>
  );
}
