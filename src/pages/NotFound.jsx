import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="utility-page section">
      <div className="container">
        <div className="utility-card">
          <div>
            <span className="utility-eyebrow">Error 404</span>
            <h1 className="h1" style={{ marginBottom: 10 }}>
              Page not found.
            </h1>
            <p className="lead">
              The page you are looking for does not exist or has moved. You can
              head back home or reach us if you need help.
            </p>
            <div className="utility-actions">
              <Link className="btn" to="/">
                Go to homepage
              </Link>
              <Link className="btn secondary" to="/contact">
                Contact us
              </Link>
            </div>
          </div>
          <div className="utility-hero">
            <img
              className="utility-logo"
              src="/logo.png"
              alt="Mobile Tint Pros logo"
            />
            <div className="utility-hero-number">404</div>
            <div className="utility-hero-text">
              Mobile Tint Pros - we will get you back on track.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
