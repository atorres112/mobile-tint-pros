import fs from "node:fs/promises";
import path from "node:path";
import { SITE_URL } from "../src/lib/site.js";

const projectRoot = path.resolve(process.cwd());
const postsDir = path.join(projectRoot, "src", "content", "posts");
const outFile = path.join(projectRoot, "public", "rss.xml");

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

async function getPosts() {
  const entries = await fs.readdir(postsDir, { withFileTypes: true });
  const mdFiles = entries.filter((e) => e.isFile() && e.name.endsWith(".md"));
  const posts = [];

  for (const file of mdFiles) {
    const fullPath = path.join(postsDir, file.name);
    const raw = await fs.readFile(fullPath, "utf-8");
    const { data, content } = parseFrontmatter(raw);
    const slug = toSlug(data, file.name);
    posts.push({
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      content,
    });
  }

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function main() {
  const posts = await getPosts();
  const items = posts
    .map((p) => {
      const link = `${SITE_URL}/blog/${p.slug}`;
      const pubDate = p.date ? new Date(p.date).toUTCString() : "";
      return `  <item>
    <title>${escapeXml(p.title)}</title>
    <link>${link}</link>
    <guid>${link}</guid>
    ${p.description ? `<description>${escapeXml(p.description)}</description>` : ""}
    ${pubDate ? `<pubDate>${pubDate}</pubDate>` : ""}
  </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>The Mobile Tint Pros Blog</title>
  <link>${SITE_URL}/blog</link>
  <description>Tips, guides, and updates about window film.</description>
${items}
</channel>
</rss>`;

  await fs.writeFile(outFile, xml, "utf-8");
  console.log(`rss.xml written to ${outFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
