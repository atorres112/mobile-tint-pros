import React from "react";
import { ArrowRight } from "lucide-react";
import ElfsightForm from "../components/ElfsightForm";
import SEO from "../components/SEO.jsx";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_TEL } from "../lib/site.js";

const description =
  "Request a free window tint estimate for residential, commercial, or automotive projects in Chicago and surrounding suburbs.";

export default function FreeEstimate() {
  return (
    <>
      <SEO
        title="Free Estimate | The Mobile Tint Pros"
        description={description}
        canonical="/free-estimate"
        ogImage="/gallery/tinted-house-windows.jpg"
      />

      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="pill">The Mobile Tint Pros</div>
            <h1 className="h1">Get a Free Estimate</h1>
            <p className="lead" style={{ marginBottom: 0 }}>
              Tell us about your project and we will recommend the right window
              film solution with a clear, competitive quote.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <a className="btn" href="#estimate-form">
                Start Your Estimate <ArrowRight size={18} />
              </a>
              <a className="btn secondary" href="/contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div id="estimate-form" className="grid2" style={{ alignItems: "start" }}>
            <div className="card">
              <h2 className="h2" style={{ marginTop: 0 }}>
                Fast, hassle-free estimate
              </h2>
              <p className="lead">
                Share your space type, window count, and goals such as heat
                reduction, privacy, glare control, or security. We will respond
                quickly with the best film options.
              </p>
              <div className="card" style={{ marginTop: 16 }}>
                <div className="pill" style={{ display: "inline-flex", marginBottom: 10 }}>
                  What to include
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
                  <li>Service type: residential, commercial, or automotive</li>
                  <li>Location and ideal timeline</li>
                  <li>Main goals: heat, privacy, glare, or security</li>
                  <li>Photos if available</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3 style={{ marginTop: 0 }}>Get your free estimate</h3>
              <p className="lead" style={{ marginTop: 8 }}>
                Fill out the form and our team will follow up soon.
              </p>
              <div
                style={{
                  borderRadius: 16,
                  border: "1px solid var(--border)",
                  background: "var(--panel)",
                  padding: "18px",
                }}
              >
                <div style={{ borderRadius: 12, overflow: "hidden" }}>
                  <ElfsightForm />
                </div>
              </div>
              <p className="lead" style={{ marginBottom: 0, marginTop: 12, fontSize: 13 }}>
                Need help right away? Call{" "}
                <a href={`tel:${BUSINESS_PHONE_TEL}`}>{BUSINESS_PHONE_DISPLAY}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
