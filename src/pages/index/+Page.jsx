import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "../../App.jsx";

export default Page;

function Page(pageContext) {
  const isBrowser = typeof window !== "undefined";
  const router = isBrowser ? (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ) : (
    <MemoryRouter initialEntries={[pageContext.urlOriginal || "/"]}>
      <App />
    </MemoryRouter>
  );

  return router;
}
