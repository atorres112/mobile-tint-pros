import React from "react";
import ElfsightForm from "../components/ElfsightForm.jsx";
import SEO from "../components/SEO.jsx";
import { ArrowRight, Building2, Home, Blinds, Zap, Smile, Shield } from "lucide-react";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
  buildLocalBusinessJsonLd,
} from "../lib/site.js";

function Section({ title, kicker, children }) {
  return (
    <section className="section">
      <div className="container">
        {kicker && <div className="pill">{kicker}</div>}
        {title && <h2 className="h2">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

function ServiceBlock({ icon, title, text }) {
  return (
    <div className="card">
      <div className="pill" style={{ display: "inline-flex", marginBottom: 12 }}>
        {icon}
        <span>Service</span>
      </div>
      <h3 style={{ margin: "0 0 10px" }}>{title}</h3>
      <p className="lead" style={{ margin: 0 }}>
        {text}
      </p>
      <div style={{ marginTop: 14 }}>
        <a className="btn secondary" href="/free-estimate">
          Book Now <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}

function Benefit({ icon, title, text }) {
  return (
    <div className="card">
      <div className="pill" style={{ display: "inline-flex", marginBottom: 12 }}>
        {icon}
        <span>Benefit</span>
      </div>
      <h3 style={{ margin: "0 0 10px" }}>{title}</h3>
      <p className="lead" style={{ margin: 0 }}>
        {text}
      </p>
    </div>
  );
}

const description =
  "Window tinting in Chicago, IL for homes and businesses. Reduce heat, glare, and UV while improving comfort and privacy.";

export default function Chicago() {
  return (
    <>
      <SEO
        title="Chicago Window Tinting | The Mobile Tint Pros"
        description={description}
        canonical="/chicago"
        ogImage="/gallery/chicago.jpg"
        jsonLd={buildLocalBusinessJsonLd({
          url: "/chicago",
          description,
          image: "/gallery/chicago.jpg",
          areaServed: ["Chicago, IL"],
        })}
      />

      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="grid2" style={{ alignItems: "center" }}>
              <div>
                <div className="pill">The Mobile Tint Pros - Chicago, Illinois</div>
                <h1 className="h1">Window Tinting and Flat Glass Solutions in Chicago</h1>
                <p className="lead">
                  Professional window film services for homes and businesses in
                  Chicago, focused on heat reduction, glare control, privacy,
                  UV protection, and cleaner interiors.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
                  <a className="btn" href="/free-estimate">
                    Book Now <ArrowRight size={18} />
                  </a>
                  <a className="btn secondary" href="#services">
                    See Services
                  </a>
                </div>

                <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
                  <div className="kpi">
                    <strong>Serving Chicago</strong>
                    <span>Residential and commercial projects</span>
                  </div>
                  <div className="kpi">
                    <strong>Film options</strong>
                    <span>Solar, privacy, security, and decorative film</span>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                <img
                  alt="Chicago skyline"
                  src="/gallery/chicago.jpg"
                  style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: 16 }}>
                  <div className="pill">Chicago, IL</div>
                  <p className="lead" style={{ margin: "10px 0 0", fontSize: 14 }}>
                    We help you choose the right film and install it with a
                    clean, precise finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section title="Top Window Film Specialists in Chicago, Illinois" kicker="Chicago Location">
        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>What we do</h3>
            <p className="lead">
              If you are looking for residential or commercial window tint
              installation in Chicago, we have you covered. We handle
              consultation, product selection, and installation so the finished
              product looks right and performs.
            </p>
            <p className="lead" style={{ marginBottom: 0 }}>
              Window film can help lower cooling costs, reduce glare, protect
              interiors from UV fading, increase privacy, and add a layer of
              safety by helping hold glass together.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Popular Chicago needs</h3>
            <div style={{ display: "grid", gap: 12 }}>
              <div className="kpi">
                <strong>Heat and glare control</strong>
                <span>Cooler rooms and fewer hot spots</span>
              </div>
              <div className="kpi">
                <strong>Privacy</strong>
                <span>Frosted and decorative options</span>
              </div>
              <div className="kpi">
                <strong>Safety</strong>
                <span>Helps reduce glass hazards</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Services in Chicago" kicker="Services">
        <div id="services" className="grid3">
          <ServiceBlock
            icon={<Home size={16} />}
            title="Residential Flat Glass"
            text="Improve comfort and reduce heat coming through your home's windows. Great for energy savings, glare reduction, UV protection, and privacy."
          />
          <ServiceBlock
            icon={<Building2 size={16} />}
            title="Commercial Flat Glass"
            text="Reduce glare and hot spots in offices, storefronts, and shared spaces while improving comfort for staff and customers."
          />
          <ServiceBlock
            icon={<Blinds size={16} />}
            title="Window Blind Installation"
            text="Need a complete window treatment solution? We can measure and install blinds for homes and offices."
          />
        </div>
      </Section>

      <Section title="Benefits" kicker="Why Film">
        <div className="grid3">
          <Benefit
            icon={<Zap size={16} />}
            title="Save Energy"
            text="Reduce solar heat gain to help lower cooling costs and improve indoor consistency."
          />
          <Benefit
            icon={<Smile size={16} />}
            title="Improve Comfort"
            text="Cut glare and balance room temperatures so spaces feel more usable throughout the day."
          />
          <Benefit
            icon={<Shield size={16} />}
            title="Increase Safety"
            text="Helps hold broken glass together, which can reduce hazards from accidents or impacts."
          />
        </div>
      </Section>

      <Section title="Get a Free Estimate" kicker="Free Quote">
        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Free Estimate</h3>
            <p className="lead" style={{ marginTop: 8 }}>
              Tell us about your project and we will get back to you with
              pricing, options, and next steps.
            </p>

            <div
              id="estimate"
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "var(--panel)",
              }}
            >
              <ElfsightForm />
            </div>

            <p className="lead" style={{ marginBottom: 0, marginTop: 12, fontSize: 13 }}>
              Have questions? Call{" "}
              <a href={`tel:${BUSINESS_PHONE_TEL}`}>{BUSINESS_PHONE_DISPLAY}</a>.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Chicago service notes</h3>
            <p className="lead" style={{ marginBottom: 0 }}>
              We respond to estimate requests quickly and keep scheduling
              straightforward. Prefer to talk first? Reach out directly.
            </p>
            <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
              <div className="kpi">
                <strong>Coverage</strong>
                <span>Chicago neighborhoods and nearby communities</span>
              </div>
              <div className="kpi">
                <strong>Phone</strong>
                <span>{BUSINESS_PHONE_DISPLAY}</span>
              </div>
              <div className="kpi">
                <strong>Email</strong>
                <span>{BUSINESS_EMAIL}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
