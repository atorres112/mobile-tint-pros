import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid3">
        {/* Contact */}
        <div>
          <img className="footer-logo" src="/logo.png" alt="The Mobile Tint Pros logo" />
          <h4>Contact</h4>
          <p>📍 Service Area: 4409 W Roscoe St</p>
          <p>📞 Phone: (773) 312-4004</p>
          <p>📧 Email: info@themobiletintpros.com</p>
        </div>

        {/* Links */}
        <div>
          <h4>Quick Links</h4>
          <div style={{ display: "grid", gap: "8px" }}>
            <Link to="/">Home</Link>
            <Link to="/service-areas">Service Areas</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4>Services</h4>
          <div style={{ display: "grid", gap: "8px" }}>
            <Link to="/services/residential">Residential Tinting</Link>
            <Link to="/services/commercial">Commercial Tinting</Link>
            <Link to="/services/hunter-douglas">Vinyl Graphics</Link>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: "24px",
          fontSize: "13px",
          opacity: 0.85,
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} The Mobile Tint Pros. All rights reserved.
      </div>
    </footer>
  );
}
