import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { toAbsoluteUrl } from "../lib/site.js";

export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  type = "website",
  jsonLd,
}) {
  const canonicalAbs = canonical ? toAbsoluteUrl(canonical) : "";
  const ogImageAbs = ogImage ? toAbsoluteUrl(ogImage) : "";

  const tags = [
    <title key="title">{title}</title>,
    description ? (
      <meta key="desc" name="description" content={description} />
    ) : null,
    canonicalAbs ? (
      <link key="canon" rel="canonical" href={canonicalAbs} />
    ) : null,
    <meta key="og:type" property="og:type" content={type} />,
    <meta key="og:title" property="og:title" content={title} />,
    description ? (
      <meta key="og:desc" property="og:description" content={description} />
    ) : null,
    canonicalAbs ? (
      <meta key="og:url" property="og:url" content={canonicalAbs} />
    ) : null,
    ogImageAbs ? (
      <meta key="og:image" property="og:image" content={ogImageAbs} />
    ) : null,
    <meta key="tw:card" name="twitter:card" content="summary_large_image" />,
    <meta key="tw:title" name="twitter:title" content={title} />,
    description ? (
      <meta key="tw:desc" name="twitter:description" content={description} />
    ) : null,
    ogImageAbs ? (
      <meta key="tw:image" name="twitter:image" content={ogImageAbs} />
    ) : null,
    jsonLd ? (
      <script key="jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    ) : null,
  ].filter(Boolean);

  return (
    <Helmet>{tags}</Helmet>
  );
}
