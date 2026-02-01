import React from "react";
import ElfsightForm from "../components/ElfsightForm.jsx";
import { ArrowRight, MapPin, Phone, Mail, HelpCircle } from "lucide-react";

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

export default function ContactUs() {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="pill">The Mobile Tint Pros</div>
            <h1 className="h1">Contact</h1>
            <p className="lead" style={{ marginBottom: 0 }}>
              Let’s discuss your next project. Fill out the form or reach out directly to schedule a free consultation.
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTACT SECTION */}
      <Section title="Let's Discuss Your Next Project" kicker="Contact Us">
        <div className="grid2" style={{ alignItems: "start" }}>
          {/* Left: Details */}
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Looking to do window tint? We can help!</h3>
            <p className="lead">
              Tell us what you’re trying to solve (heat, glare, privacy, security, aesthetics), and we’ll recommend the
              right film and a clean installation plan.
            </p>

            <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
              <div className="kpi" style={{ justifyContent: "flex-start", gap: 12 }}>
                <span className="pill" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <MapPin size={16} /> Service Areas
                </span>
                <span style={{ color: "var(--muted)" }}>Chicago, IL and Surrounding Suburbs</span>
              </div>

              <div className="kpi" style={{ justifyContent: "flex-start", gap: 12 }}>
                <span className="pill" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <MapPin size={16} /> Address
                </span>
                <span style={{ color: "var(--muted)" }}>4409 W Roscoe St Chicago IL 60641</span>
              </div>

              <div className="kpi" style={{ justifyContent: "flex-start", gap: 12 }}>
                <span className="pill" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <Mail size={16} /> Email
                </span>
                <span style={{ color: "var(--muted)" }}>info@themobiletintpros.com</span>
              </div>

              <div className="kpi" style={{ justifyContent: "flex-start", gap: 12 }}>
                <span className="pill" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <Phone size={16} /> Phone
                </span>
                <span style={{ color: "var(--muted)" }}>(773) 312-4004</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <a className="btn" href="#contact-form">
                Get in Contact <ArrowRight size={18} />
              </a>
              <a className="btn secondary" href="#faq">
                FAQ <HelpCircle size={18} />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="card" id="contact-form">
            <h3 style={{ marginTop: 0 }}>Get in Contact</h3>
            <p className="lead" style={{ marginTop: 8 }}>
              Send your details and we’ll get back to you.
            </p>

            {/* Dark padded wrapper so the form doesn’t touch edges */}
            <div
              style={{
                borderRadius: 16,
                border: "1px solid var(--border)",
                background: "var(--panel)",
                padding: "24px",
              }}
            >
              <div style={{ borderRadius: 12, overflow: "hidden" }}>
                <ElfsightForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ TEASER */}
      <Section title="Frequently Asked Questions" kicker="FAQ">
        <div id="faq" className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Common questions</h3>
            <p className="lead">
              Here are a few quick answers. If you don’t see your question, message us and we’ll help.
            </p>

            <div style={{ display: "grid", gap: 12 }}>
              <div className="card" style={{ background: "rgba(15, 23, 34, 0.04)" }}>
                <strong>How long does installation take?</strong>
                <div style={{ color: "var(--muted)", marginTop: 6 }}>
                  Most projects can be completed the same day depending on size and film type.
                </div>
              </div>

              <div className="card" style={{ background: "rgba(15, 23, 34, 0.04)" }}>
                <strong>Will window film make my space darker?</strong>
                <div style={{ color: "var(--muted)", marginTop: 6 }}>
                  Not necessarily—there are clear films designed for heat rejection with minimal darkening.
                </div>
              </div>

              <div className="card" style={{ background: "rgba(15, 23, 34, 0.04)" }}>
                <strong>Do you offer privacy and decorative films?</strong>
                <div style={{ color: "var(--muted)", marginTop: 6 }}>
                  Yes—frosted and decorative options are great for offices, storefronts, and conference rooms.
                </div>
              </div>
            </div>

            <div style={{ marginTop: 16 }}>
              <a className="btn secondary" href="/faq">
                View Full FAQ <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>What to include in your message</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
              <li>Residential or commercial?</li>
              <li>City / neighborhood</li>
              <li>Number of windows (or rough size)</li>
              <li>Your top goal: heat, glare, privacy, security, looks</li>
              <li>Any photos if you have them</li>
            </ul>

            <div style={{ marginTop: 16 }}>
              <a className="btn" href="#contact-form">
                Start a Quote <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

