import { getAllPosts } from "../lib/posts.js";

export default async function onBeforePrerenderStart() {
  const staticRoutes = [
    "/",
    "/houston",
    "/services/commercial",
    "/services/residential",
    "/services/hunter-douglas",
    "/gallery",
    "/contact",
    "/faq",
    "/service-areas",
    "/blog",
  ];

  // Blog post routes from markdown slugs
  const posts = getAllPosts();
  const blogRoutes = posts.map((p) => `/blog/${p.slug}`);

  return [...staticRoutes, ...blogRoutes];
}
