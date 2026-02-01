import React from "react";
import ElfsightForm from "../components/ElfsightForm.jsx";
import { ArrowRight, Building2, Home, Blinds, Zap, Smile, Shield } from "lucide-react";

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
        <a className="btn secondary" href="#estimate">
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

export default function Chicago() {
  return (
    <>
      {/* HERO (matches the location-page hero pattern) */}
      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="grid2" style={{ alignItems: "center" }}>
              <div>
                <div className="pill">The Mobile Tint Pros • Chicago, Illinois</div>
                <h1 className="h1">Window Tinting & Flat Glass Solutions in Chicago</h1>
                <p className="lead">
                  Professional window film services for homes and businesses — focused on heat reduction, glare control,
                  privacy, UV protection, and a cleaner, more comfortable interior.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
                  <a className="btn" href="#estimate">
                    Book Now <ArrowRight size={18} />
                  </a>
                  <a className="btn secondary" href="#services">
                    See Services
                  </a>
                </div>

                <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
                  <div className="kpi">
                    <strong>Serving Chicago</strong>
                    <span>Residential + commercial</span>
                  </div>
                  <div className="kpi">
                    <strong>Film options</strong>
                    <span>Solar • privacy • security • decorative</span>
                  </div>
                </div>
              </div>

              {/* Image (simple, no copyrighted assets) */}
              <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                <img
                  alt="Chicago skyline"
                  src="/gallery/chicago.jpg"
                  style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: 16 }}>
                  <div className="pill">Chicago, IL</div>
                  <p className="lead" style={{ margin: "10px 0 0", fontSize: 14 }}>
                    We’ll help you pick the right film for your goals and install it with a clean, precise finish.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Intro section (mirrors the “Top specialists in Chicago” block) */}
      <Section title="Top Window Film Specialists in Chicago, Illinois" kicker="Chicago Location">
        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>What we do</h3>
            <p className="lead">
              If you’re looking for residential or commercial window tint installation in Chicago, we’ve got you covered.
              We handle everything from consultation to product selection to installation — so you get results that look
              great and perform.
            </p>
            <p className="lead" style={{ marginBottom: 0 }}>
              Window film can help lower cooling costs, reduce glare, protect interiors from UV fading, increase privacy,
              and add a layer of safety by helping hold glass together.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Popular Chicago needs</h3>
            <div style={{ display: "grid", gap: 12 }}>
              <div className="kpi">
                <strong>Heat + glare control</strong>
                <span>Cooler rooms, fewer hot spots</span>
              </div>
              <div className="kpi">
                <strong>Privacy</strong>
                <span>Frosted & decorative options</span>
              </div>
              <div className="kpi">
                <strong>Safety</strong>
                <span>Helps reduce glass hazards</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services blocks (residential / commercial / blinds like the location page) */}
      <Section title="Services in Chicago" kicker="Services">
        <div id="services" className="grid3">
          <ServiceBlock
            icon={<Home size={16} />}
            title="Residential Flat Glass"
            text="Improve comfort and reduce heat coming through your home’s windows. Great for energy savings, glare reduction, UV protection, and privacy."
          />
          <ServiceBlock
            icon={<Building2 size={16} />}
            title="Commercial Flat Glass"
            text="Help your building feel more consistent by reducing glare and hot/cold spots. Window film can improve comfort for staff and tenants while cutting overhead costs."
          />
          <ServiceBlock
            icon={<Blinds size={16} />}
            title="Window Blind Installation"
            text="Want a full window treatment solution? We can measure and install blinds with a clean, professional finish for home or office spaces."
          />
        </div>
      </Section>

      {/* Benefits section (save energy / improve comfort / increase safety pattern) */}
      <Section title="Benefits" kicker="Why Film">
        <div className="grid3">
          <Benefit
            icon={<Zap size={16} />}
            title="Save Energy"
            text="Reduce heat gain through windows to help lower cooling costs — especially useful in Chicago’s sun and humidity."
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

      {/* Estimate / embed section (same idea as their “Get a Free Estimate” block) */}
      <Section title="Get a Free Estimate" kicker="Free Quote">
        <div className="grid2">
          <div className="card">
            <div className="card">
                            <h3 style={{ marginTop: 0 }}>Free Estimate</h3>
                            <p className="lead" style={{ marginTop: 8 }}>
                              Tell us about your project and we'll get back to you with pricing within 24 hours.
                            </p>
            
                            {/* Embed their quote page for now */}
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
                              Have questions? Give us a call at (773)-312-4004—we're happy to help.
                            </p>
                          </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Chicago service notes</h3>
            <p className="lead" style={{ marginBottom: 0 }}>
              We respond to all estimate requests within 24 hours, usually much faster. Prefer to talk? Give us a call during business hours.
            </p>
            <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
              <div className="kpi">
                <strong>Hours</strong>
                <span>M-F 9AM-5PM Sat 11AM-3PM</span>
              </div>
              <div className="kpi">
                <strong>Phone</strong>
                <span>(773) 312 4004</span>
              </div>
              <div className="kpi">
                <strong>Email</strong>
                <span>info@mobiletintpros.com</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


