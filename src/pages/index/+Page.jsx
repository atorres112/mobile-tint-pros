import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "../../App.jsx";

export default Page;

function Page(pageContext) {
  const isBrowser = typeof window !== "undefined";
  const initialPath =
    pageContext.urlPathname || pageContext.urlOriginal || "/";
  const router = isBrowser ? (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ) : (
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );

  return router;
}
