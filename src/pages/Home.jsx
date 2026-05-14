import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Sparkles, Sun } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel.jsx";
import ElfsightForm from "../components/ElfsightForm.jsx";
import SEO from "../components/SEO.jsx";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
  buildLocalBusinessJsonLd,
  buildWebsiteJsonLd,
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

const description =
  "Mobile window tinting in Chicago for homes, businesses, and vehicles. Reduce heat, glare, and UV exposure with clean professional installs.";

export default function Home() {
  return (
    <>
      <SEO
        title="Chicago Window Tinting | The Mobile Tint Pros"
        description={description}
        canonical="/"
        ogImage="/gallery/tinted-house-windows.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            buildWebsiteJsonLd(),
            buildLocalBusinessJsonLd({
              url: "/",
              description,
              image: "/gallery/tinted-house-windows.jpg",
            }),
          ],
        }}
      />

      <div className="container" style={{ marginTop: 18 }}>
        <ImageCarousel
          height={340}
          autoPlayMs={4000}
          images={[
            {
              src: "/hero/1.png",
              alt: "Window tint installation",
              title: "Clean installs",
              subtitle: "Professional window film results.",
            },
            {
              src: "/hero/2.png",
              alt: "Residential window tint",
              title: "Residential comfort",
              subtitle: "Reduce glare, reduce heat, boost privacy.",
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

      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="grid2" style={{ alignItems: "center" }}>
              <div>
                <img
                  src="/solutions/1.png"
                  alt="Window film example"
                  className="hero-image"
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    borderRadius: 18,
                    display: "block",
                    margin: "0 0 14px",
                    objectFit: "cover",
                  }}
                />
                <div className="pill">Home, Office, and Automotive Tint</div>
                <h1 className="h1">Premier Window Tinting Solutions</h1>
                <p className="lead">
                  Professional window film for homes, businesses, and vehicles
                  across Chicago and surrounding suburbs. We focus on comfort,
                  privacy, glare control, and long-term performance.
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
                    <span>Clear timeline and clean installation</span>
                  </div>
                  <div className="kpi">
                    <strong>Premium films</strong>
                    <span>Built for performance and longevity</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 style={{ marginTop: 0 }}>Free Estimate</h3>
                <p className="lead" style={{ marginTop: 8 }}>
                  Tell us about your project and we will get back to you with a
                  clear recommendation and quote.
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
            </div>
          </div>
        </div>
      </div>

      <Section title="Your Chicago Area Window Film Specialists" kicker="The Mobile Tint Pros">
        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>About</h3>
            <p className="lead">
              We provide premium window tinting for residential, commercial,
              and automotive projects. From consultation to installation, we
              focus on clean work, quality film, and results you can feel right
              away.
            </p>
            <p className="lead">
              Choose the right film for heat reduction, glare control, privacy,
              UV protection, and security. We will help you match the product to
              the problem instead of pushing a one-size-fits-all option.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Why window film?</h3>
            <div style={{ display: "grid", gap: 12 }}>
              <div className="kpi">
                <strong>Comfort</strong>
                <span>Reduce heat and harsh glare</span>
              </div>
              <div className="kpi">
                <strong>Protection</strong>
                <span>UV defense and fade control</span>
              </div>
              <div className="kpi">
                <strong>Privacy</strong>
                <span>Decorative, solar, and security options</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="How It Works" kicker="Step-by-step">
        <div id="how-it-works" className="grid2">
          <div style={{ display: "grid", gap: 14 }}>
            <Step
              num={1}
              title="Request a consultation"
              text="Reach out and tell us what you want to solve: heat, glare, privacy, security, or style."
            />
            <Step
              num={2}
              title="Schedule an appointment"
              text="Pick a time that works for your home, office, or vehicle and we will confirm the details."
            />
            <Step
              num={3}
              title="Review film options"
              text="We recommend products that match your goals, budget, and glass type."
            />
            <Step
              num={4}
              title="Customize the finish"
              text="Choose privacy levels, decorative looks, or performance-focused film based on the space."
            />
          </div>

          <div style={{ display: "grid", gap: 14 }}>
            <Step
              num={5}
              title="Professional installation"
              text="We prep surfaces carefully and install precisely for a clean, polished result."
            />
            <Step
              num={6}
              title="Care instructions"
              text="We explain curing time, maintenance, and what to expect right after the install."
            />
            <Step
              num={7}
              title="Clear quote and timeline"
              text="You get straightforward pricing and an installation schedule without guesswork."
            />
          </div>
        </div>
      </Section>

      <Section title="Window Film Solutions for Home, Office, and Auto" kicker="Solutions">
        <div className="grid3">
          <SolutionCard
            imageSrc="/solutions/1.png"
            icon={<Sun size={16} />}
            subtitle="Solar and Privacy"
            title="Residential"
            body="Reduce glare and heat while improving privacy and comfort in your home."
            href="/services/residential"
          />
          <SolutionCard
            icon={<Sparkles size={16} />}
            imageSrc="/gallery/decomatte.jpg"
            subtitle="Design and Branding"
            title="Commercial"
            body="Frosted, decorative, and privacy films for offices, storefronts, and shared workspaces."
            href="/services/commercial"
          />
          <SolutionCard
            icon={<Shield size={16} />}
            imageSrc="/gallery/1.png"
            subtitle="Heat and Glare Control"
            title="Automotive"
            body="Automotive tint for cooler cabins, cleaner looks, more privacy, and UV protection."
            href="/services/automotive-tint"
          />
        </div>
      </Section>

      <Section title="Let's Discuss Your Window Film Solution" kicker="Get started">
        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Quality-first installs</h3>
            <p className="lead">
              We focus on prep, precision, and clean installation so your film
              looks right and lasts.
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
            <h3 style={{ marginTop: 0 }}>Service area</h3>
            <p className="lead">
              Based in Chicago and serving surrounding suburbs for residential,
              commercial, and automotive work.
            </p>
            <div className="kpi">
              <strong>Coverage</strong>
              <span>Chicago and nearby suburbs</span>
            </div>
            <div style={{ marginTop: 14 }}>
              <Link className="btn secondary" to="/service-areas">
                View service areas
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
