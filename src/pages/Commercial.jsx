import React from "react";
import { ArrowRight, Building2, Home, BadgeCheck, Zap, Smile, Shield } from "lucide-react";
import ElfsightForm from "../components/ElfsightForm";


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

function CTABox() {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Get a Free Estimate</h3>
      <p className="lead" style={{ marginTop: 8 }}>
        For now we’re keeping the same embedded quote experience you asked for.
      </p>

      <div
  style={{
    borderRadius: 16,
    border: "1px solid var(--border)",
    background: "var(--panel)",
    padding: "18px",
  }}
>
  <div
    style={{
      borderRadius: 12,
      overflow: "hidden",
    }}
  >
    <ElfsightForm />
  </div>
</div>


      <div style={{ marginTop: 12 }}>
        <a className="btn secondary" href="#benefits">
          See Benefits <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}

function ProjectTypeCard({ icon, title, text, href }) {
  return (
    <div className="card">
      <div className="pill" style={{ display: "inline-flex", marginBottom: 12 }}>
        {icon}
        <span>Project Type</span>
      </div>
      <h3 style={{ margin: "0 0 10px" }}>{title}</h3>
      <p className="lead" style={{ margin: 0 }}>
        {text}
      </p>

      <div style={{ marginTop: 14 }}>
        <a className="btn secondary" href={href}>
          Learn More <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, text }) {
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

export default function Commercial() {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="grid2" style={{ alignItems: "center" }}>
              <div>
                <div className="pill">The Mobile Tint Pros • Commercial Services</div>
                <h1 className="h1">Premier Commercial Window Tinting</h1>

                <p className="lead">
                  Commercial window film helps reduce heat and glare, improves comfort, increases privacy,
                  and adds a layer of safety by helping hold glass together.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
                  <a className="btn" href="#estimate">
                    Get a Free Estimate <ArrowRight size={18} />
                  </a>
                  <a className="btn secondary" href="#project-types">
                    View Project Types
                  </a>
                </div>

                <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
                  <div className="kpi">
                    <strong>Commercial-first</strong>
                    <span>Offices • Retail • Buildings</span>
                  </div>
                  <div className="kpi">
                    <strong>Clean installs</strong>
                    <span>Prep + precision + finish</span>
                  </div>
                </div>
              </div>

              {/* Estimate Box */}
              <div id="estimate">
                <CTABox />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT TYPES */}
      <Section title="We specialize in all applications" kicker="Project Types">
        <div id="project-types" className="grid2">
          <ProjectTypeCard
            icon={<Home size={16} />}
            title="Residential"
            text="Home window film solutions for comfort, glare reduction, UV protection, and privacy."
            href="/services/residential"
          />
          <ProjectTypeCard
            icon={<Building2 size={16} />}
            title="Commercial"
            text="Window film solutions for businesses and commercial properties: comfort, efficiency, privacy, and safety."
            href="/services/commercial"
          />
        </div>
      </Section>

      {/* BENEFITS */}
      <Section title="Benefits" kicker="Commercial Window Tint">
        <div id="benefits" className="grid3">
          <BenefitCard
            icon={<Zap size={16} />}
            title="Save Energy"
            text="Reduce the amount of solar heat coming through windows to help lower cooling costs and improve tenant comfort."
          />
          <BenefitCard
            icon={<Smile size={16} />}
            title="Improve Comfort"
            text="Help reduce hot spots and glare so interior spaces feel more consistent and comfortable—without sacrificing natural light."
          />
          <BenefitCard
            icon={<Shield size={16} />}
            title="Increase Safety"
            text="Film can help hold broken glass together, which can reduce hazards from flying shards during accidents or severe weather."
          />
        </div>
      </Section>

      {/* REPUTATION / TRUST STRIP */}
      <Section title="Reputation Matters" kicker="Trusted Service">
        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Quality you can trust</h3>
            <p className="lead" style={{ marginBottom: 0 }}>
              Add your real certifications, warranty info, and “years in business” details here.
              (The reference page emphasizes trust + reputation in this section.){" "}
            </p>
          </div>

          <div className="card">
            <div className="pill" style={{ display: "inline-flex", marginBottom: 12 }}>
              <BadgeCheck size={16} />
              <span>Reviews</span>
            </div>

            <p className="lead" style={{ marginTop: 0 }}>
              Replace these with your review widgets or screenshots later.
            </p>

            <div className="grid4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="card"
                  style={{ padding: 12, textAlign: "center", background: "rgba(15, 23, 34, 0.04)" }}
                >
                  <div className="pill" style={{ justifyContent: "center" }}>Review</div>
                  <div style={{ marginTop: 8, color: "var(--muted)", fontSize: 13 }}>
                    Placeholder
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT IS COMMERCIAL WINDOW FILM */}
      <Section title="What is Commercial Window Film?" kicker="Overview">
        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Simple explanation</h3>
            <p className="lead">
              Commercial window film is a thin layer applied to glass to help manage solar heat,
              glare, and UV exposure, and to add safety and security performance depending on the film type.
            </p>

            <p className="lead" style={{ marginBottom: 0 }}>
              Unlike blinds or curtains (which often must be closed to work), film is designed to
              reduce heat and glare while keeping the view and natural light.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Common benefits</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
              <li>Improved comfort</li>
              <li>Improved energy savings</li>
              <li>Increased privacy</li>
              <li>Increased fade protection</li>
              <li>Reduced glare</li>
              <li>Increased safety and security</li>
            </ul>

            <div style={{ marginTop: 16 }}>
              <a className="btn" href="#estimate">
                Get a Free Estimate <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

