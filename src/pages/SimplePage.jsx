import React from "react";

export default function SimplePage({ title }) {
  return (
    <div className="section">
      <div className="container">
        <div className="card">
          <h1 className="h2" style={{ marginTop: 0 }}>
            {title}
          </h1>
          <p className="lead" style={{ marginBottom: 0 }}>
            This page is a placeholder so your navbar links work. Tell me which
            page you want to build next (Gallery, Services pages, Blog layout,
            etc.) and I’ll match it.
          </p>
        </div>
      </div>
    </div>
  );
}
