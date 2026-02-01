import fs from "node:fs/promises";
import path from "node:path";
import { SITE_URL } from "../src/lib/site.js";

const projectRoot = path.resolve(process.cwd());
const postsDir = path.join(projectRoot, "src", "content", "posts");
const outFile = path.join(projectRoot, "public", "sitemap.xml");

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) return { data: {}, content: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { data: {}, content: raw };
  const fmBlock = raw.slice(3, end).trim();
  const data = {};
  fmBlock.split(/\r?\n/).forEach((line) => {
    if (!line.trim() || line.trim().startsWith("#")) return;
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    data[key] = value;
  });
  const content = raw.slice(end + 4).replace(/^\r?\n/, "");
  return { data, content };
}

function toSlug(frontmatter, filename) {
  if (frontmatter?.slug) return frontmatter.slug;
  return filename
    .replace(/^\d{4}-\d{2}-\d{2}-/, "")
    .replace(/\.md$/i, "");
}

async function getPostRoutes() {
  const entries = await fs.readdir(postsDir, { withFileTypes: true });
  const mdFiles = entries.filter((e) => e.isFile() && e.name.endsWith(".md"));
  const routes = [];

  for (const file of mdFiles) {
    const fullPath = path.join(postsDir, file.name);
    const raw = await fs.readFile(fullPath, "utf-8");
    const { data } = parseFrontmatter(raw);
    const slug = toSlug(data, file.name);
    const date = data.date || "";
    routes.push({ url: `/blog/${slug}`, lastmod: date });
  }

  return routes;
}

async function main() {
  const staticRoutes = [
    "/",
    "/services/commercial",
    "/services/residential",
    "/services/hunter-douglas",
    "/gallery",
    "/contact",
    "/faq",
    "/service-areas",
    "/blog",
  ];

  const posts = await getPostRoutes();
  const urls = [
    ...staticRoutes.map((u) => ({ url: u })),
    ...posts,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => {
    const loc = `${SITE_URL}${u.url}`;
    const lastmod = u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : "";
    return `  <url>
    <loc>${loc}</loc>${lastmod}
  </url>`;
  })
  .join("\n")}
</urlset>`;

  await fs.writeFile(outFile, xml, "utf-8");
  console.log(`sitemap.xml written to ${outFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
