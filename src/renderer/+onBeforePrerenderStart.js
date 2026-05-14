import { getAllPosts } from "../lib/posts.js";

export default async function onBeforePrerenderStart() {
  const staticRoutes = [
    "/",
    "/service-areas",
    "/chicago",
    "/chicago-suburbs",
    "/services/commercial",
    "/services/residential",
    "/services/automotive-tint",
    "/gallery",
    "/contact",
    "/free-estimate",
    "/faq",
    "/blog",
  ];

  // Blog post routes from markdown slugs
  const posts = getAllPosts();
  const blogRoutes = posts.map((p) => `/blog/${p.slug}`);

  return [...staticRoutes, ...blogRoutes];
}
