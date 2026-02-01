import React from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts.js";
import SEO from "../components/SEO.jsx";
import { SITE_URL } from "../lib/site.js";

export default function BlogIndex() {
  const posts = getAllPosts();
  const canonical = "/blog";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Mobile Tint Pros Blog",
    url: `${SITE_URL}/blog`,
  };

  return (
    <>
      <SEO
        title="Blog | The Mobile Tint Pros"
        description="Tips, guides, and updates about residential and commercial window film, privacy, heat reduction, and glare control."
        canonical={canonical}
        type="website"
        jsonLd={jsonLd}
      />

      <div className="hero">
        <div className="container">
          <div className="hero-panel">
            <div className="pill">The Mobile Tint Pros</div>
            <h1 className="h1">Blog</h1>
            <p className="lead" style={{ marginBottom: 0 }}>
              Helpful guides and answers to common window film questions.
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid3">
            {posts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card" style={{ display: "block" }}>
                {p.cover && (
                  <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)", marginBottom: 12 }}>
                    <img src={p.cover} alt={p.title} style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }} />
                  </div>
                )}
                <div className="pill" style={{ marginBottom: 10 }}>
                  {p.date || "—"}
                </div>
                <h3 style={{ margin: "0 0 10px" }}>{p.title}</h3>
                <p className="lead" style={{ margin: 0 }}>{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
