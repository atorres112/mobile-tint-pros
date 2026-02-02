import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Sparkles, Sun } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel.jsx";
import ElfsightForm from "../components/ElfsightForm.jsx";



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

function SolutionCard({ icon, subtitle, title, body, href, imageSrc, imageAlt }) {
  return (
    <div className="card">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || title}
          style={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            borderRadius: 12,
            marginBottom: 12,
            display: "block",
          }}
        />
      )}
      <div className="pill" style={{ display: "inline-flex", marginBottom: 12 }}>
        {icon}
        <span>{subtitle}</span>
      </div>
      <h3 style={{ margin: "0 0 10px" }}>{title}</h3>
      <p className="lead" style={{ margin: "0 0 14px" }}>
        {body}
      </p>
      {href && href.startsWith("/") ? (
        <Link className="btn secondary" to={href}>
          Learn More <ArrowRight size={18} />
        </Link>
      ) : (
        <a className="btn secondary" href={href}>
          Learn More <ArrowRight size={18} />
        </a>
      )}
    </div>
  );
}

function Step({ num, title, text }) {
  return (
    <div className="step">
      <div className="step-num">{String(num).padStart(2, "0")}</div>
      <div>
        <h4 style={{ margin: "0 0 6px" }}>{title}</h4>
        <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.5 }}>{text}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
  <>
    <div className="container" style={{ marginTop: 18 }}>
      <ImageCarousel
        height={340}
        autoPlayMs={4000}
        images={[
          {
            src: "/hero/1.png",
            alt: "Tint installation",
            title: "Clean installs",
            subtitle: "Professional window film results.",
          },
          {
            src: "/hero/2.png",
            alt: "Residential window tint",
            title: "Residential comfort",
            subtitle: "Reduce glare • reduce heat • boost privacy.",
          },
          {
            src: "/hero/3.PNG",
            alt: "Commercial window tint",
            title: "Commercial performance",
            subtitle: "Energy savings and a better workspace.",
          },
        ]}
      />
    </div>

    {/* HERO */}
    <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="grid2" style={{ alignItems: "center" }}>
              <div>
                <img
                  src="/solutions/1.png"
                  alt="Window film example"
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    borderRadius: 18,
                    display: "block",
                    margin: "0 0 14px",
                    objectFit: "cover",
                  }}
                />
                <div className="pill">Home & Office Window Tinting</div>
                <h1 className="h1">Premier Window Tinting Solutions</h1>
                <p className="lead">
                  High-quality window film services for homes and businesses—focused
                  on comfort, privacy, glare control, and energy efficiency.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
                  <Link className="btn" to="/free-estimate">
                    Get a Free Estimate <ArrowRight size={18} />
                  </Link>
                  <a className="btn secondary" href="#how-it-works">
                    How it works
                  </a>
                </div>

                <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
                  <div className="kpi">
                    <strong>Fast scheduling</strong>
                    <span>Clear timeline + clean install</span>
                  </div>
                  <div className="kpi">
                    <strong>Premium films</strong>
                    <span>Built for performance + longevity</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>Free Estimate</h3>
                <p className="lead" style={{ marginTop: 8 }}>
                  Please fill out the info below. We will get back to you shortly. Thank You!
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
                  If the embed blocks in the future, we’ll replace it with your own embed link.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <Section title="Your Leading Area Window Film Specialists" kicker="The Mobile Tint Pros">
        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>About</h3>
            <p className="lead">
              We provide premium window tinting for residential and commercial spaces.
              From consultation to installation, we focus on clean work, quality film,
              and results you can feel immediately.
            </p>
            <p className="lead">
              Choose the right film for heat reduction, glare control, privacy,
              UV protection, and safety—done the right way.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Why window film?</h3>
            <div style={{ display: "grid", gap: 12 }}>
              <div className="kpi">
                <strong>Comfort</strong>
                <span>Reduce heat + glare</span>
              </div>
              <div className="kpi">
                <strong>Protection</strong>
                <span>UV + fading control</span>
              </div>
              <div className="kpi">
                <strong>Privacy</strong>
                <span>Decorative + privacy options</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section title="How It Works" kicker="Step-by-step">
        <div id="how-it-works" className="grid2">
          <div style={{ display: "grid", gap: 14 }}>
            <Step
              num={1}
              title="Request a consultation"
              text="Reach out and tell us what you want to fix: heat, glare, privacy, or security."
            />
            <Step
              num={2}
              title="Schedule an appointment"
              text="Pick a time that works. We’ll confirm the details and measurements."
            />
            <Step
              num={3}
              title="Meet with our team"
              text="We review film options and recommend what fits your goals and budget."
            />
            <Step
              num={4}
              title="Customization options"
              text="Choose privacy levels, decorative finishes, or branded film for offices."
            />
          </div>

          <div style={{ display: "grid", gap: 14 }}>
            <Step
              num={5}
              title="Installation process"
              text="We prep surfaces and install precisely for a clean, professional finish."
            />
            <Step
              num={6}
              title="Benefits & maintenance"
              text="We provide care instructions and tell you exactly what to expect after install."
            />
            <Step
              num={7}
              title="Proposal & estimate"
              text="You get a clear estimate and timeline—no confusion, no surprises."
            />
          </div>
        </div>
      </Section>

      {/* SOLUTIONS */}
      <Section title="Window Film Solutions For Home and Office" kicker="Solutions">
        <div className="grid3">
          <SolutionCard
           imageSrc="/solutions/1.png"
           icon={<Sun size={16} />}
           subtitle="Solar + Privacy"
           title="Privacy"
           body="Reduce glare and heat while improving privacy and comfort in your space."
           href="/services/residential"
        />
          <SolutionCard
            icon={<Sparkles size={16} />}
            imageSrc="/gallery/decomatte.jpg"
            subtitle="Design + Branding"
            title="Decorative"
            body="Frosted and patterned films that add style—great for offices and storefronts."
            href="/services/commercial"
          />
          <SolutionCard
            icon={<Shield size={16} />}
            imageSrc="/gallery/secfilm.jpeg"
            subtitle="Safety + Strength"
            title="Security"
            body="Security films help hold glass together and improve break-in resistance."
            href="/blog/security-film"
          />
        </div>
      </Section>

      {/* CTA */}
      <Section title="Let’s Discuss Your Window Film Solution" kicker="Get started">
        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Quality-first installs</h3>
            <p className="lead">
              We focus on prep, precision, and clean installs—so your film looks perfect and lasts.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
              <Link className="btn" to="/free-estimate">
                Get a Free Estimate <ArrowRight size={18} />
              </Link>
              <Link className="btn secondary" to="/contact">
                Contact us
              </Link>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Service Area</h3>
            <p className="lead">
              Update this to match your real service area (cities, suburbs, coverage radius).
            </p>
            <div className="kpi">
              <strong>Primary area</strong>
              <span>Set your location</span>
            </div>
          </div>
        </div>
      </Section>

      {/*
      <Section title="Satisfied Customers" kicker="Trusted by">
        <div className="grid4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="card" style={{ textAlign: "center" }}>
              <div className="pill" style={{ justifyContent: "center" }}>
                Client Logo
              </div>
              <div style={{ marginTop: 10, color: "var(--muted)" }}>
                Replace with your logos
              </div>
            </div>
          ))}
        </div>
      </Section>
      */}
    </>
  );
}


