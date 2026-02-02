import React from "react";
import SEO from "../components/SEO.jsx";
import CTABanner from "../components/CTABanner.jsx";
import { Shield, Sun, Thermometer, EyeOff, CheckCircle2, ArrowRight } from "lucide-react";

const automotiveGallery = [
  { src: "/gallery/1.png", title: "Sedan - 20% ceramic tint" },
  { src: "/gallery/2.png", title: "SUV - heat rejection upgrade" },
  { src: "/gallery/3.PNG", title: "Coupe - privacy + glare control" },
  { src: "/gallery/4.JPG", title: "Truck - ceramic film package" },
  { src: "/gallery/7.JPG", title: "Crossover - clean edge finish" },
  { src: "/gallery/8.PNG", title: "Luxury sedan - premium tint" },
];

function Section({ kicker, title, children }) {
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

function Benefit({ icon, title, text }) {
  return (
    <div className="card">
      <div className="pill" style={{ display: "inline-flex", gap: 8, marginBottom: 10 }}>
        {icon}
        <span>{title}</span>
      </div>
      <p className="lead" style={{ margin: 0 }}>{text}</p>
    </div>
  );
}

function FilmCard({ title, subtitle, bullets }) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p className="lead" style={{ marginTop: 8 }}>{subtitle}</p>
      <ul style={{ margin: "12px 0 0", paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
        {bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </div>
  );
}

function Step({ n, title, text }) {
  return (
    <div className="card">
      <div className="pill" style={{ marginBottom: 10 }}>Step {n}</div>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p className="lead" style={{ margin: 0 }}>{text}</p>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <div className="card" style={{ background: "rgba(255,255,255,0.03)" }}>
      <strong>{q}</strong>
      <div style={{ color: "var(--muted)", marginTop: 8, lineHeight: 1.7 }}>{a}</div>
    </div>
  );
}

export default function AutomotiveTint() {
  return (
    <>
      <SEO
        title="Automotive Window Tint | The Mobile Tint Pros"
        description="Professional automotive window tint for heat reduction, glare control, UV protection, and privacy. Choose the right film and tint shade with help from The Mobile Tint Pros."
        canonical="/automotive-tint"
        type="website"
      />

      {/* HERO */}
      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="pill">The Mobile Tint Pros</div>
            <h1 className="h1">Automotive Window Tint</h1>
            <p className="lead" style={{ marginBottom: 0 }}>
              A cooler cabin, less glare, more privacy, and UV protection — installed clean, fast, and professionally.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
              <a className="btn" href="/free-estimate">
                Get a Free Estimate <ArrowRight size={18} />
              </a>
              <a className="btn secondary" href="#options">
                Explore Film Options <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <Section kicker="Why Tint?" title="How Automotive Tint Helps">
        <p className="lead" style={{ maxWidth: 900 }}>
          Automotive window tint is popular for comfort and protection: reducing interior heat, cutting glare,
          increasing privacy, and blocking UV that can damage interiors and skin over time.
        </p>

        <div className="grid3">
          <Benefit
            icon={<Thermometer size={16} />}
            title="Cooler Interior"
            text="Reduce solar heat so your car feels better faster — especially after sitting in the sun."
          />
          <Benefit
            icon={<EyeOff size={16} />}
            title="More Privacy"
            text="Darker or reflective options help reduce visibility into your vehicle."
          />
          <Benefit
            icon={<Sun size={16} />}
            title="UV Protection"
            text="Quality film can help block harmful UV exposure and reduce fading of seats, dash, and trim."
          />
          <Benefit
            icon={<Shield size={16} />}
            title="Added Protection"
            text="Some films can help hold glass together if it breaks (ask about safety/security options)."
          />
        </div>

        <div style={{ marginTop: 14 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Picking a tint shade (VLT)</h3>
            <p className="lead" style={{ marginTop: 8 }}>
              Tint is often described by “percentage” (Visible Light Transmission). Many drivers commonly choose
              shades around 20% or 35%, depending on local laws and preference.
            </p>
            <a className="btn secondary" href="#faq">
              Read FAQ <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section kicker="Recent Work" title="Automotive Tint Gallery">
        <p className="lead" style={{ maxWidth: 900 }}>
          A few recent installs from our mobile team. Ask about matching your preferred shade and finish.
        </p>
        <div className="galleryGrid">
          {automotiveGallery.map((item) => (
            <div className="galleryItem" key={item.src}>
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="galleryOverlay">
                <div className="galleryTitle">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FILM OPTIONS */}
      <Section kicker="Film Options" title="Choose the Right Film">
        <div id="options" className="grid3">
          <FilmCard
            title="Ceramic Film"
            subtitle="Best performance for heat rejection and clarity."
            bullets={[
              "Great heat reduction without going extremely dark",
              "Excellent clarity and comfort",
              "Popular choice for daily drivers and long commutes",
            ]}
          />
          <FilmCard
            title="Carbon Film"
            subtitle="Strong value with good heat reduction."
            bullets={[
              "Improved comfort vs basic films",
              "Nice color tone and durability",
              "Great balance of performance and budget",
            ]}
          />
          <FilmCard
            title="Dyed Film"
            subtitle="Budget-friendly privacy + glare reduction."
            bullets={[
              "Improves privacy and reduces glare",
              "Good entry-level option",
              "Best for customers prioritizing cost",
            ]}
          />
        </div>

        <div className="card" style={{ marginTop: 14 }}>
          <h3 style={{ marginTop: 0 }}>What we help you decide</h3>
          <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
            {[
              "Your goal: heat, glare, privacy, appearance",
              "Front vs rear shading needs",
              "Windshield strip vs full windshield options (where legal)",
              "Local tint law compliance",
            ].map((t) => (
              <div key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <CheckCircle2 size={18} style={{ marginTop: 2 }} />
                <div style={{ color: "var(--muted)" }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section kicker="Our Process" title="Clean Install, No Shortcuts">
        <div className="grid3">
          <Step
            n={1}
            title="Review + Recommendations"
            text="We confirm your goals, vehicle type, and desired shade. Then we recommend film options that match."
          />
          <Step
            n={2}
            title="Prep + Precision Cut"
            text="We prep glass, protect your interior, and cut film precisely for a clean edge finish."
          />
          <Step
            n={3}
            title="Install + Final Check"
            text="We install, inspect for cleanliness/fit, and walk you through curing and care."
          />
        </div>
      </Section>

      {/* CTA */}
      <div id="get-quote">
        <CTABanner
          title="LET’S DISCUSS YOUR AUTOMOTIVE TINT"
          text="Tell us your vehicle, your goal (heat, glare, privacy), and your preferred tint shade. We’ll recommend the right film and get you scheduled."
          subtitle="MOBILE SERVICE — BY APPOINTMENT"
          buttonText="GET A FREE ESTIMATE"
          buttonLink="/free-estimate"
          image="/cta/cta-image.jpg"
        />
      </div>

      {/* FAQ */}
      <Section kicker="FAQ" title="Automotive Tint Questions">
        <div id="faq" className="grid2">
          <div style={{ display: "grid", gap: 12 }}>
            <FAQItem
              q="How long does it take?"
              a="Most vehicles are same-day. Time depends on vehicle size, film type, and complexity."
            />
            <FAQItem
              q="How long does tint take to cure?"
              a="Cure time depends on weather. You may see temporary haze or small moisture pockets early on."
            />
            <FAQItem
              q="What tint percentage should I choose?"
              a="It depends on your preference and local law. Many drivers choose 20% or 35% as a common balance of privacy and visibility."
            />
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Care tips after install</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
              <li>Avoid rolling windows down for 2–4 days (we’ll confirm for your film/weather).</li>
              <li>Clean with ammonia-free glass cleaner and a soft microfiber.</li>
              <li>Don’t pick at edges—reach out if you notice anything unusual.</li>
            </ul>
            <div style={{ marginTop: 16 }}>
              <a className="btn" href="/contact">
                Contact Us <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


