import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Car, Home, MapPin, Phone } from "lucide-react";
import SEO from "../components/SEO.jsx";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
  SERVICE_AREAS,
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
  "See the Chicago neighborhoods and nearby suburbs served by The Mobile Tint Pros for residential, commercial, and automotive window tinting.";

const areaCards = [
  {
    to: "/chicago",
    title: "Chicago, IL",
    body:
      "Window film solutions for homes, storefronts, offices, and vehicles throughout Chicago.",
    points: [
      "Residential flat glass",
      "Commercial privacy and solar film",
      "Automotive tint by appointment",
    ],
  },
  {
    to: "/chicago-suburbs",
    title: "Chicago Suburbs",
    body:
      "Mobile service for nearby suburbs and surrounding communities that need cleaner, cooler, more private glass.",
    points: [
      "Home window tint",
      "Office and storefront film",
      "Project quotes for surrounding communities",
    ],
  },
];

export default function ServiceAreas() {
  return (
    <>
      <SEO
        title="Service Areas | The Mobile Tint Pros"
        description={description}
        canonical="/service-areas"
        ogImage="/gallery/chicago.jpg"
        jsonLd={buildLocalBusinessJsonLd({
          url: "/service-areas",
          description,
          areaServed: SERVICE_AREAS,
          image: "/gallery/chicago.jpg",
        })}
      />

      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="pill">The Mobile Tint Pros</div>
            <h1 className="h1">Service Areas</h1>
            <p className="lead" style={{ marginBottom: 0 }}>
              We serve Chicago and nearby suburbs with residential, commercial,
              and automotive window tinting. If you are nearby and do not see
              your city listed, contact us and we will confirm availability.
            </p>
          </div>
        </div>
      </div>

      <Section title="Where We Work" kicker="Chicago Region">
        <div className="grid2">
          {areaCards.map((area) => (
            <div key={area.to} className="card">
              <div className="pill" style={{ display: "inline-flex", marginBottom: 12 }}>
                <MapPin size={16} />
                <span>{area.title}</span>
              </div>
              <h3 style={{ margin: "0 0 10px" }}>{area.title}</h3>
              <p className="lead" style={{ margin: 0 }}>
                {area.body}
              </p>
              <ul style={{ margin: "14px 0 0", paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
                {area.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div style={{ marginTop: 16 }}>
                <Link className="btn secondary" to={area.to}>
                  View Area Page <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What We Install" kicker="Services">
        <div className="grid3">
          <div className="card">
            <div className="pill" style={{ display: "inline-flex", marginBottom: 12 }}>
              <Home size={16} />
              <span>Residential</span>
            </div>
            <h3 style={{ margin: "0 0 10px" }}>Home window film</h3>
            <p className="lead" style={{ margin: 0 }}>
              Reduce heat, glare, and UV exposure while adding privacy and
              helping rooms stay more comfortable.
            </p>
          </div>
          <div className="card">
            <div className="pill" style={{ display: "inline-flex", marginBottom: 12 }}>
              <Building2 size={16} />
              <span>Commercial</span>
            </div>
            <h3 style={{ margin: "0 0 10px" }}>Offices and storefronts</h3>
            <p className="lead" style={{ margin: 0 }}>
              Solar film, privacy film, decorative film, and security options
              for businesses that need cleaner, more consistent spaces.
            </p>
          </div>
          <div className="card">
            <div className="pill" style={{ display: "inline-flex", marginBottom: 12 }}>
              <Car size={16} />
              <span>Automotive</span>
            </div>
            <h3 style={{ margin: "0 0 10px" }}>Automotive tint</h3>
            <p className="lead" style={{ margin: 0 }}>
              Automotive film for cooler cabins, less glare, more privacy, and
              a cleaner finished look.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Need to Confirm Your Address?" kicker="Next Step">
        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Talk to our team</h3>
            <p className="lead">
              The fastest way to confirm coverage is to send your address and a
              quick description of your project. We will tell you if you are in
              range and what the next step looks like.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <a className="btn" href={`tel:${BUSINESS_PHONE_TEL}`}>
                <Phone size={18} /> Call {BUSINESS_PHONE_DISPLAY}
              </a>
              <Link className="btn secondary" to="/free-estimate">
                Get a Free Estimate
              </Link>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>What to send</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.8 }}>
              <li>Your city or suburb</li>
              <li>Residential, commercial, or automotive</li>
              <li>What you want to solve: heat, glare, privacy, or security</li>
              <li>Your preferred timeline</li>
              <li>Photos if you have them</li>
            </ul>
            <p className="lead" style={{ marginBottom: 0, marginTop: 14 }}>
              Email: <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
