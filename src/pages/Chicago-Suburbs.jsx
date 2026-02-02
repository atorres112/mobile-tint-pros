import React from "react";
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

export default function Chicago() {
  return (
    <>
      {/* HERO (matches the location-page hero pattern) */}
      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="grid2" style={{ alignItems: "center" }}>
              <div>
                <div className="pill">The Mobile Tint Pros • Houston, Texas</div>
                <h1 className="h1">Window Tinting & Flat Glass Solutions in Houston</h1>
                <p className="lead">
                  Professional window film services for homes and businesses — focused on heat reduction, glare control,
                  privacy, UV protection, and a cleaner, more comfortable interior.
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
                    <strong>Serving Houston</strong>
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
                  alt="Houston skyline"
                  src="https://www.wallpaperflare.com/photo-of-brown-and-gray-high-rise-buildings-during-daytime-wallpaper-zruti"
                  style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: 16 }}>
                  <div className="pill">Houston, TX</div>
                  <p className="lead" style={{ margin: "10px 0 0", fontSize: 14 }}>
                    We’ll help you pick the right film for your goals and install it with a clean, precise finish.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Intro section (mirrors the “Top specialists in Houston” block) */}
      <Section title="Top Window Film Specialists in Houston, Texas" kicker="Houston Location">
        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>What we do</h3>
            <p className="lead">
              If you’re looking for residential or commercial window tint installation in Houston, we’ve got you covered.
              We handle everything from consultation to product selection to installation — so you get results that look
              great and perform.
            </p>
            <p className="lead" style={{ marginBottom: 0 }}>
              Window film can help lower cooling costs, reduce glare, protect interiors from UV fading, increase privacy,
              and add a layer of safety by helping hold glass together.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Popular Houston needs</h3>
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
      <Section title="Services in Houston" kicker="Services">
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
            text="Reduce heat gain through windows to help lower cooling costs — especially useful in Houston’s sun and humidity."
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
            <h3 style={{ marginTop: 0 }}>Request pricing</h3>
            <p className="lead">
              For now we’re keeping the same embedded quote experience you asked for.
              Later we can swap this to your own form.
            </p>

            <div
              id="estimate"
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "white",
              }}
            >
              <iframe
                title="Quote Form"
                src="https://commercialfilmspecialists.com/window-tint-free-quote/"
                style={{ width: "100%", height: 620, border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Houston service notes</h3>
            <p className="lead" style={{ marginBottom: 0 }}>
              Add your real service radius, hours, and phone here when ready. (We’ll also update the footer contact info.)
            </p>
            <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
              <div className="kpi">
                <strong>Hours</strong>
                <span>Set your hours</span>
              </div>
              <div className="kpi">
                <strong>Phone</strong>
                <span>Set your number</span>
              </div>
              <div className="kpi">
                <strong>Email</strong>
                <span>Set your email</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}



