export const SITE_URL = "https://themobiletintpros.com";

export function toAbsoluteUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const normalized = url.startsWith("/") ? url : `/${url}`;
  return `${SITE_URL}${normalized}`;
}
