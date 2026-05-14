export const SITE_URL = "https://themobiletintpros.com";
export const BUSINESS_NAME = "The Mobile Tint Pros";
export const BUSINESS_PHONE_TEL = "+17733124004";
export const BUSINESS_PHONE_DISPLAY = "(773) 312-4004";
export const BUSINESS_EMAIL = "info@themobiletintpros.com";
export const BUSINESS_ADDRESS_LINE = "4409 W Roscoe St, Chicago, IL 60641";
export const BUSINESS_ADDRESS = {
  streetAddress: "4409 W Roscoe St",
  addressLocality: "Chicago",
  addressRegion: "IL",
  postalCode: "60641",
  addressCountry: "US",
};
export const SERVICE_AREAS = ["Chicago, IL", "Chicago suburbs"];
export const DEFAULT_OG_IMAGE = "/gallery/tinted-house-windows.jpg";

export function toAbsoluteUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const normalized = url.startsWith("/") ? url : `/${url}`;
  return `${SITE_URL}${normalized}`;
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS_NAME,
    url: SITE_URL,
  };
}

export function buildLocalBusinessJsonLd({
  url = "/",
  description = "",
  image = DEFAULT_OG_IMAGE,
  areaServed = SERVICE_AREAS,
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    url: toAbsoluteUrl(url),
    image: toAbsoluteUrl(image),
    logo: toAbsoluteUrl("/logo.png"),
    telephone: BUSINESS_PHONE_TEL,
    email: BUSINESS_EMAIL,
    description,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_ADDRESS,
    },
    areaServed: areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };
}
