import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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

const faqs = [
  {
    question: "How long does installation take?",
    answer:
      "Most projects are completed the same day. Larger jobs or specialty films can take longer, and we’ll give you a clear timeline up front.",
  },
  {
    question: "Will window film make my space darker?",
    answer:
      "Not necessarily. There are clear films designed for heat rejection with minimal darkening, as well as privacy options with more tint.",
  },
  {
    question: "Do you offer privacy or decorative films?",
    answer:
      "Yes. We install frosted and decorative films for offices, storefronts, conference rooms, and residential spaces.",
  },
  {
    question: "Is window film safe for dual-pane or low‑E glass?",
    answer:
      "Yes, with the right film selection. We recommend compatible films based on your glass type and goals.",
  },
  {
    question: "Do you offer same‑day or next‑day service?",
    answer:
      "Often, yes - depending on the project size and current scheduling. Reach out and we’ll confirm the soonest available time.",
  },
  {
    question: "How long does window film last?",
    answer:
      "Most premium films last 10+ years with proper installation and care. We only use high‑quality, warrantied materials.",
  },
  {
    question: "Will film damage my windows when removed?",
    answer:
      "No. When installed and removed properly, film comes off cleanly. We can also handle future removal if needed.",
  },
  {
    question: "Do you service commercial properties?",
    answer:
      "Yes. We handle offices, storefronts, and multi‑unit buildings and can schedule around business hours.",
  },
];

export default function FAQ() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="pill">The Mobile Tint Pros</div>
            <h1 className="h1">Frequently Asked Questions</h1>
            <p className="lead" style={{ marginBottom: 0 }}>
              Quick answers to common questions about window film, installation, and service.
            </p>
          </div>
        </div>
      </div>

      <Section title="FAQ" kicker="Support">
        <div className="faqList">
          {faqs.map((item, index) => (
            <details key={item.question} className="faqItem" open={index === 0}>
              <summary>{item.question}</summary>
              <div className="faqAnswer">{item.answer}</div>
            </details>
          ))}
        </div>

        <div className="card faqCta">
          <h3 style={{ marginTop: 0 }}>Still have questions?</h3>
          <p className="lead" style={{ marginBottom: 0 }}>
            Send us a quick message and we’ll help you pick the right film and schedule.
          </p>
          <div style={{ marginTop: 16 }}>
            <Link className="btn" to="/contact">
              Get a Free Estimate <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
