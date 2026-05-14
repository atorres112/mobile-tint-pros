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
  "Window tinting in the Chicago suburbs for homes and businesses. Serving nearby communities with residential and commercial film installation.";

export default function ChicagoSuburbs() {
  return (
    <>
      <SEO
        title="Chicago Suburbs Window Tinting | The Mobile Tint Pros"
        description={description}
        canonical="/chicago-suburbs"
        ogImage="/gallery/chicago.jpg"
        jsonLd={buildLocalBusinessJsonLd({
          url: "/chicago-suburbs",
          description,
          image: "/gallery/chicago.jpg",
          areaServed: ["Chicago suburbs"],
        })}
      />

      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="grid2" style={{ alignItems: "center" }}>
              <div>
                <div className="pill">The Mobile Tint Pros - Chicago Suburbs</div>
                <h1 className="h1">Window Tinting and Flat Glass Solutions in the Chicago Suburbs</h1>
                <p className="lead">
                  Mobile window film services for nearby suburbs and surrounding
                  communities. We help homes and businesses reduce heat, glare,
                  and UV exposure while improving comfort and privacy.
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
                    <strong>Serving nearby suburbs</strong>
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
                  alt="Chicago area skyline"
                  src="/gallery/chicago.jpg"
                  style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: 16 }}>
                  <div className="pill">Chicago Suburbs</div>
                  <p className="lead" style={{ margin: "10px 0 0", fontSize: 14 }}>
                    If you are just outside the city, we can help confirm
                    coverage and quote your project quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section title="Window Film Specialists for Nearby Communities" kicker="Suburban Coverage">
        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>What we do</h3>
            <p className="lead">
              We work with homeowners, offices, storefronts, and property
              managers across surrounding communities that need better heat
              control, privacy, and glare reduction.
            </p>
            <p className="lead" style={{ marginBottom: 0 }}>
              Whether your project is a single home, a storefront, or a larger
              commercial space, we help you choose the right film and install it
              cleanly.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Common suburban needs</h3>
            <div style={{ display: "grid", gap: 12 }}>
              <div className="kpi">
                <strong>Heat and glare control</strong>
                <span>Make bright rooms more usable</span>
              </div>
              <div className="kpi">
                <strong>Privacy</strong>
                <span>Great for homes, offices, and glass entries</span>
              </div>
              <div className="kpi">
                <strong>Energy savings</strong>
                <span>Help reduce solar heat gain on exposed glass</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Services in the Chicago Suburbs" kicker="Services">
        <div id="services" className="grid3">
          <ServiceBlock
            icon={<Home size={16} />}
            title="Residential Flat Glass"
            text="Improve comfort and reduce heat through your home's windows with films designed for glare, UV, privacy, and energy performance."
          />
          <ServiceBlock
            icon={<Building2 size={16} />}
            title="Commercial Flat Glass"
            text="Support offices, storefronts, and shared spaces with film that improves comfort, consistency, and daytime privacy."
          />
          <ServiceBlock
            icon={<Blinds size={16} />}
            title="Window Blind Installation"
            text="Need a complete window treatment solution? We can handle blinds along with your window film project."
          />
        </div>
      </Section>

      <Section title="Benefits" kicker="Why Film">
        <div className="grid3">
          <Benefit
            icon={<Zap size={16} />}
            title="Save Energy"
            text="Reduce heat gain through windows to help rooms stay more consistent and comfortable."
          />
          <Benefit
            icon={<Smile size={16} />}
            title="Improve Comfort"
            text="Cut glare and balance indoor temperatures so homes and workspaces feel better throughout the day."
          />
          <Benefit
            icon={<Shield size={16} />}
            title="Increase Safety"
            text="Some films help hold glass together, which can reduce hazards from impacts or breakage."
          />
        </div>
      </Section>

      <Section title="Get a Free Estimate" kicker="Free Quote">
        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Request pricing</h3>
            <p className="lead">
              Tell us about your project and we will confirm coverage, recommend
              film options, and send the next steps.
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
              Prefer to talk first? Call{" "}
              <a href={`tel:${BUSINESS_PHONE_TEL}`}>{BUSINESS_PHONE_DISPLAY}</a>.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Suburban service notes</h3>
            <p className="lead" style={{ marginBottom: 0 }}>
              Not sure if you are in range? Send your city, address, and project
              type. We will confirm availability quickly.
            </p>
            <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
              <div className="kpi">
                <strong>Coverage</strong>
                <span>Nearby suburbs and surrounding communities</span>
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
