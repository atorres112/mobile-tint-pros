import React from "react";
import { ArrowRight, Shield, Sun, Zap, EyeOff, Home } from "lucide-react";
import ElfsightForm from "../components/ElfsightForm";
import CommercialCTA from "../components/CommercialCTA.jsx";

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
        Tell us about your business, your goals, and the spaces you want protected.
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
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
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
      <p className="lead" style={{ marginTop: 8 }}>{description}</p>
      <div style={{ color: "var(--muted)", fontWeight: 700, marginTop: 10 }}>Features:</div>
      <ul style={{ margin: "6px 0 0", paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
        {includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
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
                <h1 className="h1">Privacy & Protection for Commercial Spaces</h1>
                <p className="lead">
                 Designed for offices, storefronts, and professional buildings.
                </p>
                <p className="lead" style={{ marginTop: 10 }}>
                  Enhance daytime privacy, reduce solar heat, and protect occupants and interiors from harmful UV exposure.
                  Our decorative, privacy, and security window films provide comfort, safety, and long-term savings.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
                  <a className="btn" href="/free-estimate">
                    Get a Free Estimate <ArrowRight size={18} />
                  </a>
                  <a className="btn secondary" href="#films">
                    Explore Film Options
                  </a>
                </div>
              </div>

              <ImageCard src="/gallery/trinity.jpeg" alt="Commercial building with tint" />
            </div>
          </div>
        </div>
      </div>

      {/* ESTIMATE */}
      <Section title="Get a quote" kicker="Fast & Simple">
        <div className="grid2" style={{ alignItems: "stretch" }}>
          <div id="estimate">
            <CTABox />
          </div>
          <ImageCard src="/gallery/flatglassdoor.png" alt="Privacy film on a door" />
        </div>
      </Section>

      {/* PAIN POINTS */}
      <Section title="Are you tired of..." kicker="Common Problems">
        <div className="grid2" style={{ alignItems: "center" }}>
          <div className="card">
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.8 }}>
              <li>Offices and workspaces that are uncomfortably hot or cold</li>
              <li>Eye strain and headaches caused by harsh sunlight and glare</li>
              <li>Lost productivity from glare on computer and display screens</li>
              <li>Faded furniture, flooring, and décor from UV exposure</li>
              <li>High energy costs and overworked A/C systems</li>
            </ul>
          </div>
          <ImageCard src="/gallery/office.jpg" alt="Tinted residential windows" />
        </div>
      </Section>

      {/* BENEFITS */}
      <Section title="Get your homes windows tinted" kicker="Benefits">
        <div id="benefits" className="grid3">
          <BenefitCard
            icon={<Zap size={16} />}
            title="Lower Energy Bills"
            text="Enjoy more consistent interior temperatures and reduce your energy costs."
          />
          <BenefitCard
            icon={<Sun size={16} />}
            title="UV + Fade Protection"
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
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.8 }}>
              <li>Comfortable rooms all day long</li>
              <li>Prevent eyestrain from painful sun glare</li>
              <li>Protect valuable belongings</li>
              <li>Reduce hot spots in sun-facing rooms</li>
            </ul>
          </div>
          <ImageCard src="/gallery/houseinterior.jpg" alt="Window film for comfort and privacy" />
        </div>
      </Section>

      {/* FILMS */}
      <Section title="Variety of tints" kicker="Film Series">
        <div id="films" className="grid2">
          <FilmCard
            title="PLATINUM Series"
            description="Solar control with clear visibility outside and enhanced privacy inside."
            includes={[
              "Blocks up to 99% of harmful UV rays",
              "Helps reduce heating and cooling costs",
              "Room temperature reduction in hot weather",
              "Prevents heat loss during cooler months",
              "Helps protect furnishings from discoloration",
              "Adds support if glass breaks",
            ]}
          />
          <ImageCard src="/gallery/flatglassdoor.png" alt="Clear view window film appearance" />
        </div>

        <div className="grid2" style={{ marginTop: 16 }}>
          <ImageCard src="/gallery/secfilm.jpeg" alt="Commercial security window film" />
          <FilmCard
            title="Commercial Security Film"
            description="Protect your business, employees, and property with security window film designed to strengthen glass and reduce the risk of break-ins, accidents, and storm damage."
            includes={[
              "Strengthens glass to resist impacts and forced entry",
              "Helps hold shattered glass together during breakage",
              "Reduces damage from vandalism, storms, and accidents",
              "Delays smash-and-grab attempts and unauthorized access",
              "Maintains clear visibility while blocking harmful UV rays",
            ]}
          />
        </div>

        <div className="grid2" style={{ marginTop: 16 }}>
          <FilmCard
            title="Commercial & Office Window Vinyl Graphics"
            description="Ready-to-apply vinyl lettering and graphics for storefronts, offices, and buildings."
            includes={[
              "Brick graphics",
              "Custom decals",
              "Etched glass vinyl",
              "Floor graphics",
              "Hours of operation window lettering",
              "Small window graphics",
              "Vehicle and boat lettering",
            ]}
          />
          <ImageCard src="/gallery/vinylsigns.jpg" alt="Commercial vinyl window graphics" />
        </div>


        <div className="grid2" style={{ marginTop: 16 }}>
          <ImageCard src="/gallery/decofilm.jpg" alt="Exterior window film application" />
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

      {/* WARRANTY */}
      <Section title="Commercial film warranty coverage" kicker="Warranty">
        <div className="grid2" style={{ alignItems: "center" }}>
          <div className="card">
            <div className="pill" style={{ display: "inline-flex", marginBottom: 12 }}>
              <Shield size={16} />
              <span>Architectural Series</span>
            </div>
            <h3 style={{ marginTop: 0 }}>Reliable coverage for commercial films</h3>
            <p className="lead" style={{ marginBottom: 0 }}>
              RAYNO Architectural Series films are backed by a dependable warranty program and are held to
              higher standards for performance and longevity. Coverage applies to both customers and dealers.
              Specific terms can vary by region and application.
            </p>
          </div>
          <div className="card" style={{ display: "grid", gap: 10 }}>
            {[
              "Architectural-grade performance",
              "Coverage for commercial applications",
              "Reliable, long-term durability",
              "Installed by trained professionals",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Home size={18} />
                <div style={{ color: "var(--muted)" }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section title="Fast, hassle-free installation" kicker="Our Process">
        <div className="grid2" style={{ alignItems: "center" }}>
          <div className="card" style={{ display: "grid", gap: 12 }}>
            {[
              {
                title: "Request a free estimate",
                text: "We review your goals, recommend film options, and provide a clear, competitive quote.",
              },
              {
                title: "Professional installation",
                text: "We handle everything on-site so you can relax. No heavy prep work or furniture moving needed.",
              },
              {
                title: "Enjoy the comfort",
                text: "After install, you get better privacy, reduced glare, and cooler rooms right away.",
              },
            ].map((step) => (
              <div key={step.title}>
                <h3 style={{ margin: "0 0 6px" }}>{step.title}</h3>
                <p className="lead" style={{ margin: 0 }}>{step.text}</p>
              </div>
            ))}
          </div>
          <ImageCard src="/gallery/trinity.jpeg" alt="Professional home window film installation" />
        </div>
      </Section>

      {/* WHY US */}
    <Section title="What makes us different" kicker="Why Choose Us">
        <div className="grid2" style={{ alignItems: "center" }}>
          <ImageCard src="/logo.png" alt="Precision window film application" />
          <div className="card">
            <p className="lead">
              Commercial window film is only as good as its installation. Clean, precise application ensures
              long-term performance, clarity, and energy savings. Our team brings decades of experience so every
              project is done right the first time.
            </p>
            <div style={{ display: "grid", gap: 8, marginTop: 12, color: "var(--muted)" }}>
              {[
                "Commercial film experts with 20+ years of experience",
                "We manage projects from planning to final walkthrough",
                "Professional crews that respect your workspace",
                "Clear, competitive quotes for every project",
                "Known for timely, clean installations",
                "We handle jobs of all sizes, from storefronts to large facilities",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Home size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PRICING + VALUE */}
      <Section title="The cost of waiting" kicker="Value">
        <div className="grid2" style={{ alignItems: "center" }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Without commercial window tint, you may:</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.8 }}>
              <li>Continue to overpay on A/C bills year after year</li>
              <li>Endure hot rooms and uncomfortable glare</li>
              <li>See flooring, furniture, and artwork fade faster</li>
              <li>Lose comfort in the rooms you use most</li>
            </ul>
            <p className="lead" style={{ marginTop: 12, marginBottom: 0 }}>
              With premium window film, you lower energy costs, protect your home's interior, and enjoy
              a more comfortable living space in every season.
            </p>
          </div>
          <ImageCard src="/gallery/tinted-house-windows.jpg" alt="Comfortable, glare-free living room" />
        </div>
      </Section>

      {/* SIGNATURE FEATURES */}
      <Section title="Signature film features" kicker="Performance">
        <div className="grid3">
          <BenefitCard
            icon={<Zap size={16} />}
            title="Lower Energy Costs"
            text="Make your home more energy-efficient by reducing solar heat gain."
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
            icon={<Shield size={16} />}
            title="Security"
            text="Additional security benefits are provided only by security films, not privacy films."
          />
          <BenefitCard
            icon={<EyeOff size={16} />}
            title="Privacy"
            text="Increase daytime privacy without sacrificing your view."
          />
        </div>
      </Section>

      <CommercialCTA />
    </>
  );
}

