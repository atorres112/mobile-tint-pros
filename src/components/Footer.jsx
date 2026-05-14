import React from "react";
import { Link } from "react-router-dom";
import {
  BUSINESS_ADDRESS_LINE,
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from "../lib/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid3">
        <div>
          <img className="footer-logo" src="/logo.png" alt="The Mobile Tint Pros logo" />
          <h4>Contact</h4>
          <p>Address: {BUSINESS_ADDRESS_LINE}</p>
          <p>Service Area: Chicago and surrounding suburbs</p>
          <p>
            Phone: <a href={`tel:${BUSINESS_PHONE_TEL}`}>{BUSINESS_PHONE_DISPLAY}</a>
          </p>
          <p>
            Email: <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
          </p>
        </div>

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

        <div>
          <h4>Services</h4>
          <div style={{ display: "grid", gap: "8px" }}>
            <Link to="/services/residential">Residential Tinting</Link>
            <Link to="/services/commercial">Commercial Tinting</Link>
            <Link to="/services/automotive-tint">Automotive Tinting</Link>
            <Link to="/services/commercial#vinyl-graphics">Vinyl Graphics</Link>
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
        Copyright {new Date().getFullYear()} The Mobile Tint Pros. All rights
        reserved.
      </div>
    </footer>
  );
}
