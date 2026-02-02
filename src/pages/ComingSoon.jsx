import React from "react";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <section className="utility-page section">
      <div className="container">
        <div className="utility-card">
          <div>
            <span className="utility-eyebrow">Coming Soon</span>
            <h1 className="h1" style={{ marginBottom: 10 }}>
              New updates are on the way.
            </h1>
            <p className="lead">
              We are preparing a fresh experience for Mobile Tint Pros. In the
              meantime, you can browse our services or get in touch for a quick
              quote.
            </p>
            <div className="utility-actions">
              <Link className="btn" to="/services/commercial">
                View services
              </Link>
              <Link className="btn secondary" to="/free-estimate">
                Get a quote
              </Link>
            </div>
          </div>
          <div className="utility-hero">
            <img
              className="utility-logo"
              src="/logo.png"
              alt="Mobile Tint Pros logo"
            />
            <div className="utility-hero-number">Soon</div>
            <div className="utility-hero-text">
              High-performance window film and on-site service.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
