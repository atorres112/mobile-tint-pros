import React from "react";
import ElfsightForm from "../components/ElfsightForm.jsx";
import SEO from "../components/SEO.jsx";
import { ArrowRight, MapPin, Phone, Mail, HelpCircle } from "lucide-react";
import {
  BUSINESS_ADDRESS_LINE,
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

const description =
  "Contact The Mobile Tint Pros for residential, commercial, and automotive tint quotes in Chicago and surrounding suburbs.";

export default function ContactUs() {
  return (
    <>
      <SEO
        title="Contact | The Mobile Tint Pros"
        description={description}
        canonical="/contact"
        ogImage="/gallery/chicago.jpg"
        jsonLd={buildLocalBusinessJsonLd({
          url: "/contact",
          description,
          image: "/gallery/chicago.jpg",
        })}
      />

      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="pill">The Mobile Tint Pros</div>
            <h1 className="h1">Contact</h1>
            <p className="lead" style={{ marginBottom: 0 }}>
              Let's discuss your next project. Fill out the form or reach out
              directly to schedule a free consultation.
            </p>
          </div>
        </div>
      </div>

      <Section title="Let's Discuss Your Next Project" kicker="Contact Us">
        <div className="grid2" style={{ alignItems: "start" }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Looking to do window tint? We can help.</h3>
            <p className="lead">
              Tell us what you are trying to solve, whether that is heat, glare,
              privacy, security, or appearance, and we will recommend the right
              film and installation plan.
            </p>

            <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
              <div className="kpi" style={{ justifyContent: "flex-start", gap: 12 }}>
                <span className="pill" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <MapPin size={16} /> Service Area
                </span>
                <span style={{ color: "var(--muted)" }}>Chicago and surrounding suburbs</span>
              </div>

              <div className="kpi" style={{ justifyContent: "flex-start", gap: 12 }}>
                <span className="pill" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <MapPin size={16} /> Address
                </span>
                <span style={{ color: "var(--muted)" }}>{BUSINESS_ADDRESS_LINE}</span>
              </div>

              <div className="kpi" style={{ justifyContent: "flex-start", gap: 12 }}>
                <span className="pill" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <Mail size={16} /> Email
                </span>
                <a href={`mailto:${BUSINESS_EMAIL}`} style={{ color: "var(--muted)" }}>
                  {BUSINESS_EMAIL}
                </a>
              </div>

              <div className="kpi" style={{ justifyContent: "flex-start", gap: 12 }}>
                <span className="pill" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <Phone size={16} /> Phone
                </span>
                <a href={`tel:${BUSINESS_PHONE_TEL}`} style={{ color: "var(--muted)" }}>
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <a className="btn" href="/free-estimate">
                Get in Contact <ArrowRight size={18} />
              </a>
              <a className="btn secondary" href="#faq">
                FAQ <HelpCircle size={18} />
              </a>
            </div>
          </div>

          <div className="card" id="contact-form">
            <h3 style={{ marginTop: 0 }}>Get in Contact</h3>
            <p className="lead" style={{ marginTop: 8 }}>
              Send your details and we will get back to you.
            </p>

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

            <p className="lead" style={{ marginBottom: 0, marginTop: 12, fontSize: 13 }}>
              If the form does not load, call{" "}
              <a href={`tel:${BUSINESS_PHONE_TEL}`}>{BUSINESS_PHONE_DISPLAY}</a>.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Frequently Asked Questions" kicker="FAQ">
        <div id="faq" className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Common questions</h3>
            <p className="lead">
              Here are a few quick answers. If you do not see your question,
              send us a message and we will help.
            </p>

            <div style={{ display: "grid", gap: 12 }}>
              <div className="card" style={{ background: "rgba(15, 23, 34, 0.04)" }}>
                <strong>How long does installation take?</strong>
                <div style={{ color: "var(--muted)", marginTop: 6 }}>
                  Most projects can be completed the same day depending on size
                  and film type.
                </div>
              </div>

              <div className="card" style={{ background: "rgba(15, 23, 34, 0.04)" }}>
                <strong>Will window film make my space darker?</strong>
                <div style={{ color: "var(--muted)", marginTop: 6 }}>
                  Not necessarily. There are clear films designed for heat
                  rejection with minimal darkening.
                </div>
              </div>

              <div className="card" style={{ background: "rgba(15, 23, 34, 0.04)" }}>
                <strong>Do you offer privacy and decorative films?</strong>
                <div style={{ color: "var(--muted)", marginTop: 6 }}>
                  Yes. Frosted and decorative options work well for offices,
                  storefronts, and conference rooms.
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
              <li>Residential, commercial, or automotive</li>
              <li>City or neighborhood</li>
              <li>Number of windows or rough size</li>
              <li>Your main goal: heat, glare, privacy, security, or looks</li>
              <li>Any photos you have available</li>
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
