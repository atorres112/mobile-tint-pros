import React from "react";
import { useParams, Link } from "react-router-dom";
import { getPostBySlug, renderMarkdown } from "../lib/posts.js";
import SEO from "../components/SEO.jsx";
import { toAbsoluteUrl } from "../lib/site.js";
import CTABanner from "../components/CTABanner.jsx";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="section">
        <div className="container">
          <div className="card">
            <h1 className="h2" style={{ marginTop: 0 }}>Post not found</h1>
            <p className="lead">That article doesn’t exist yet.</p>
            <Link className="btn secondary" to="/blog">Back to Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  const canonical = `/blog/${post.slug}`;
  const canonicalAbs = toAbsoluteUrl(canonical);
  const ogImageAbs = post.cover ? toAbsoluteUrl(post.cover) : "";
  const html = renderMarkdown(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    mainEntityOfPage: canonicalAbs,
    author: { "@type": "Organization", name: "The Mobile Tint Pros" },
    publisher: { "@type": "Organization", name: "The Mobile Tint Pros" },
    image: ogImageAbs || undefined,
  };

  return (
    <>
      <SEO
        title={`${post.title} | The Mobile Tint Pros`}
        description={post.description}
        canonical={canonical}
        type="article"
        ogImage={post.cover || ""}
        jsonLd={jsonLd}
      />

      <section className="section blogPostSection">
        <div className="container">
          <Link className="pill" to="/blog">← Back to Blog</Link>

          <div className="card" style={{ marginTop: 14 }}>
            <div className="pill" style={{ marginBottom: 10 }}>{post.date || "—"}</div>
            <h1 className="h2" style={{ marginTop: 0 }}>{post.title}</h1>
            <p className="lead">{post.description}</p>

            {post.cover && (
              <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)", marginTop: 14 }}>
                <img src={post.cover} alt={post.title} style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
              </div>
            )}

            <div
              className="blogContent"
              style={{ marginTop: 18 }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to upgrade your windows?"
        text="Get a fast, no-pressure quote from The Mobile Tint Pros. We’ll help you pick the right film for privacy, glare, and heat control."
        buttonText="Get a Free Estimate"
        buttonLink="/contact"
        subtitle="Serving Chicago and surrounding areas"
        image="/gallery/1.png"
      />
    </>
  );
}
