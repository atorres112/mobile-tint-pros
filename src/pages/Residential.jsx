import React from "react";
import { ArrowRight, Shield, Sun, Zap, EyeOff, Home } from "lucide-react";
import SEO from "../components/SEO.jsx";
import ElfsightForm from "../components/ElfsightForm";
import ResidentialCTA from "../components/ResidentialCTA.jsx";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
  buildLocalBusinessJsonLd,
} from "../lib/site.js";

const pageDescription =
  "Residential window tinting in Chicago for heat control, privacy, glare reduction, and UV protection. Get a free home window film quote from The Mobile Tint Pros.";

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
        Tell us about your home, your goals, and the rooms you want tinted.
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

      <p className="lead" style={{ marginTop: 12, marginBottom: 0 }}>
        If the form does not load, call{" "}
        <a href={`tel:${BUSINESS_PHONE_TEL}`}>{BUSINESS_PHONE_DISPLAY}</a>.
      </p>

      <div style={{ marginTop: 12 }}>
        <a className="btn secondary" href="#benefits">
          See Benefits <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}

function ImageCard({ src, alt }) {
  return (
    <div className="card" style={{ padding: 0, overflow: "hidden" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        loading="lazy"
      />
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

function FilmCard({ title, includes, description }) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p className="lead" style={{ marginTop: 8 }}>
        {description}
      </p>
      <div style={{ color: "var(--muted)", fontWeight: 700, marginTop: 10 }}>
        Features:
      </div>
      <ul
        style={{
          margin: "6px 0 0",
          paddingLeft: 18,
          color: "var(--muted)",
          lineHeight: 1.7,
        }}
      >
        {includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Residential() {
  const jsonLd = buildLocalBusinessJsonLd({
    url: "/services/residential",
    description: pageDescription,
    image: "/gallery/tinted-house-windows.jpg",
  });

  return (
    <>
      <SEO
        title="Residential Window Tinting in Chicago | The Mobile Tint Pros"
        description={pageDescription}
        canonical="/services/residential"
        ogImage="/gallery/tinted-house-windows.jpg"
        jsonLd={jsonLd}
      />

      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="grid2" style={{ alignItems: "center" }}>
              <div>
                <div className="pill">
                  The Mobile Tint Pros - Residential Services
                </div>
                <h1 className="h1">Residential Window Tinting</h1>
                <p className="lead">
                  Improve privacy, lower heat, and reduce glare with home
                  window tint installed across Chicago and surrounding suburbs.
                </p>
                <p className="lead" style={{ marginTop: 10 }}>
                  Our residential films help protect interiors from UV exposure,
                  improve comfort, and create a more energy-efficient home.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    marginTop: 18,
                  }}
                >
                  <a className="btn" href="/free-estimate">
                    Get a Free Estimate <ArrowRight size={18} />
                  </a>
                  <a className="btn secondary" href="#films">
                    Explore Film Options
                  </a>
                </div>
              </div>

              <ImageCard
                src="/gallery/tinted-house-windows.jpg"
                alt="Residential window tint installation"
              />
            </div>
          </div>
        </div>
      </div>

      <Section title="Get a quote" kicker="Fast and Simple">
        <div className="grid2" style={{ alignItems: "stretch" }}>
          <div id="estimate">
            <CTABox />
          </div>
          <ImageCard
            src="/gallery/flatglassdoor.png"
            alt="Home window film on a glass door"
          />
        </div>
      </Section>

      <Section title="Are you tired of..." kicker="Common Problems">
        <div className="grid2" style={{ alignItems: "center" }}>
          <div className="card">
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                color: "var(--muted)",
                lineHeight: 1.8,
              }}
            >
              <li>Rooms that are too hot</li>
              <li>Blinding sun glare</li>
              <li>High cooling bills</li>
              <li>Fading furniture and decor</li>
              <li>Feeling concerned about who is looking into your home</li>
            </ul>
          </div>
          <ImageCard
            src="/gallery/houseinterior2.jpg"
            alt="Tinted residential windows"
          />
        </div>
      </Section>

      <Section title="Why homeowners choose window film" kicker="Benefits">
        <div id="benefits" className="grid3">
          <BenefitCard
            icon={<Zap size={16} />}
            title="Lower Energy Bills"
            text="Enjoy more consistent interior temperatures and reduce your energy costs."
          />
          <BenefitCard
            icon={<Sun size={16} />}
            title="UV and Fade Protection"
            text="Block harmful UV radiation and help prevent interior fading."
          />
          <BenefitCard
            icon={<EyeOff size={16} />}
            title="Daytime Privacy"
            text="Feel more secure with improved daytime privacy and reduced glare."
          />
        </div>

        <div className="grid2" style={{ marginTop: 16, alignItems: "center" }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>More reasons homeowners love tint</h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                color: "var(--muted)",
                lineHeight: 1.8,
              }}
            >
              <li>Comfortable rooms throughout the day</li>
              <li>Less eye strain from direct sunlight</li>
              <li>Better protection for floors, furniture, and decor</li>
              <li>Fewer hot spots in sun-facing rooms</li>
            </ul>
          </div>
          <ImageCard
            src="/gallery/houseinterior.jpg"
            alt="Window film for comfort and privacy"
          />
        </div>
      </Section>

      <Section title="Film options for your home" kicker="Film Series">
        <div id="films" className="grid2">
          <FilmCard
            title="PLATINUM Series"
            description="Solar control with clear outward visibility and enhanced privacy inside."
            includes={[
              "Blocks up to 99% of harmful UV rays",
              "Helps reduce heating and cooling costs",
              "Room temperature reduction in hot weather",
              "Helps reduce heat loss during cooler months",
              "Helps protect furnishings from discoloration",
              "Adds support if glass breaks",
            ]}
          />
          <ImageCard
            src="/gallery/flatglassdoor.png"
            alt="Clear view residential window film appearance"
          />
        </div>

        <div className="grid2" style={{ marginTop: 16 }}>
          <ImageCard
            src="/gallery/secfilm.jpeg"
            alt="Security window film on a home"
          />
          <FilmCard
            title="Rescue Series"
            description="Protect your family and property from window damage and unwanted intrusions."
            includes={[
              "Strengthens windows for added impact resistance",
              "Minimizes damage from storms and external shocks",
              "Helps keep glass from shattering",
              "Helps deter robbery or intrusion",
              "Maintains clear visibility with UV protection",
            ]}
          />
        </div>

        <div className="grid2" style={{ marginTop: 16 }}>
          <FilmCard
            title="Trinity Series"
            description="An all-in-one premium film that combines insulation, solar control, and security."
            includes={[
              "Reduces energy costs and boosts efficiency",
              "Helps cool rooms in warm weather",
              "Blocks heat loss in cooler months",
              "Blocks 99% of harmful UV rays",
              "Stronger glass protection against impacts",
              "Adds security against unwanted visibility and intrusion",
              "Exceptional clarity and visibility",
            ]}
          />
          <ImageCard
            src="/gallery/trinity.jpeg"
            alt="Neutral home window film finish"
          />
        </div>

        <div className="grid2" style={{ marginTop: 16 }}>
          <ImageCard
            src="/gallery/decofilm.jpg"
            alt="Decorative film on interior home glass"
          />
          <FilmCard
            title="Decorative Film"
            description="Customize your space with frosted, dusted, textured, or patterned finishes that add privacy without closing off natural light."
            includes={[
              "Define interior spaces while keeping an open feel",
              "Create privacy without sacrificing daylight",
              "Great for interior glass doors or window surfaces",
              "Etched, cut, sandblasted, or textured-glass look",
              "Upscale finishes at a fraction of the cost",
              "Fast application and easy removal",
              "Optional die-cut designs for branding",
            ]}
          />
        </div>
      </Section>

      <Section
        title="Manufacturer-backed lifetime warranty for your home"
        kicker="Warranty"
      >
        <div className="grid2" style={{ alignItems: "center" }}>
          <div className="card">
            <div className="pill" style={{ display: "inline-flex", marginBottom: 12 }}>
              <Shield size={16} />
              <span>Lifetime Coverage</span>
            </div>
            <h3 style={{ marginTop: 0 }}>Built to last</h3>
            <p className="lead" style={{ marginBottom: 0 }}>
              Your film is backed by a manufacturer lifetime warranty and is
              designed to resist fading and bubbling when properly installed.
            </p>
          </div>
          <div className="card" style={{ display: "grid", gap: 10 }}>
            {[
              "Resists fading",
              "Resists bubbling",
              "Improves safety and comfort",
              "Installed by trained professionals",
            ].map((item) => (
              <div
                key={item}
                style={{ display: "flex", gap: 10, alignItems: "center" }}
              >
                <Home size={18} />
                <div style={{ color: "var(--muted)" }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Fast, hassle-free installation" kicker="Our Process">
        <div className="grid2" style={{ alignItems: "center" }}>
          <div className="card" style={{ display: "grid", gap: 12 }}>
            {[
              {
                title: "Request a free estimate",
                text: "We review your goals, recommend film options, and provide a clear quote.",
              },
              {
                title: "Professional installation",
                text: "We handle the installation with clean prep and careful application on-site.",
              },
              {
                title: "Enjoy the comfort",
                text: "After install, you get better privacy, reduced glare, and cooler rooms right away.",
              },
            ].map((step) => (
              <div key={step.title}>
                <h3 style={{ margin: "0 0 6px" }}>{step.title}</h3>
                <p className="lead" style={{ margin: 0 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
          <ImageCard
            src="/gallery/trinity.jpeg"
            alt="Professional home window film installation"
          />
        </div>
      </Section>

      <Section title="What makes us different" kicker="Why Choose Us">
        <div className="grid2" style={{ alignItems: "center" }}>
          <ImageCard src="/logo.png" alt="Precision window film application" />
          <div className="card">
            <p className="lead">
              Home window film is only as good as its installation. Clean,
              bubble-free application protects clarity, appearance, and
              long-term performance. Our team brings decades of experience so
              each project is done right the first time.
            </p>
            <div style={{ display: "grid", gap: 8, marginTop: 12, color: "var(--muted)" }}>
              {[
                "Window tinting experts with 20 plus years of experience",
                "We handle everything from start to finish",
                "Professional, respectful service",
                "Competitive pricing with clear quotes",
                "Known for timely, clean installations",
                "We show up for every job, big or small",
              ].map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", gap: 10, alignItems: "center" }}
                >
                  <Home size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="The cost of waiting" kicker="Value">
        <div className="grid2" style={{ alignItems: "center" }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>
              Without residential window tint, you may:
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 18,
                color: "var(--muted)",
                lineHeight: 1.8,
              }}
            >
              <li>Continue to overpay on cooling bills year after year</li>
              <li>Deal with hot rooms and uncomfortable glare</li>
              <li>See flooring, furniture, and artwork fade faster</li>
              <li>Lose comfort in the rooms you use most</li>
            </ul>
            <p className="lead" style={{ marginTop: 12, marginBottom: 0 }}>
              With premium window film, you lower energy costs, protect your
              home's interior, and enjoy a more comfortable living space in
              every season.
            </p>
          </div>
          <ImageCard
            src="/gallery/tinted-house-windows.jpg"
            alt="Comfortable, glare-free living room"
          />
        </div>
      </Section>

      <Section title="Signature film features" kicker="Performance">
        <div className="grid3">
          <BenefitCard
            icon={<Zap size={16} />}
            title="Lower Energy Costs"
            text="Make your home more energy efficient by reducing solar heat gain."
          />
          <BenefitCard
            icon={<Sun size={16} />}
            title="UV Ray Protection"
            text="Reject up to 99% of UV exposure to help protect skin and extend the life of interiors."
          />
          <BenefitCard
            icon={<Shield size={16} />}
            title="Glare Control"
            text="Enjoy natural light with less eye strain and fewer harsh reflections."
          />
          <BenefitCard
            icon={<Home size={16} />}
            title="Comfort"
            text="Reduce hot spots and maintain more even temperatures throughout your home."
          />
          <BenefitCard
            icon={<EyeOff size={16} />}
            title="Privacy"
            text="Increase daytime privacy without sacrificing your view."
          />
        </div>
      </Section>

      <ResidentialCTA />
    </>
  );
}
