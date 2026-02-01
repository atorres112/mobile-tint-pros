import { marked } from "marked";

// Grab all markdown files at build time
const postFiles = import.meta.glob("../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) {
    return { data: {}, content: raw };
  }

  const end = raw.indexOf("\n---", 3);
  if (end === -1) {
    return { data: {}, content: raw };
  }

  const fmBlock = raw.slice(3, end).trim();
  const content = raw.slice(end + 4).replace(/^\r?\n/, "");
  const data = {};

  fmBlock.split(/\r?\n/).forEach((line) => {
    if (!line.trim() || line.trim().startsWith("#")) return;
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);
    } else if (key === "tags") {
      value = value
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);
    }

    data[key] = value;
  });

  return { data, content };
}

function toSlug(frontmatter, filename) {
  if (frontmatter?.slug) return frontmatter.slug;
  // fallback slug from filename
  return filename
    .replace("../content/posts/", "")
    .replace(".md", "")
    .replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

export function getAllPosts() {
  const posts = Object.entries(postFiles).map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = toSlug(data, path);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      tags: data.tags || [],
      cover: data.cover || "",
      // keep raw markdown for post page
      content,
    };
  });

  // newest first
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export function renderMarkdown(md) {
  const html = marked.parse(md);
  return enhanceFaqHtml(html);
}

function enhanceFaqHtml(html) {
  const faqHeading = /<h2>\s*Frequently Asked Questions\s*<\/h2>/i;
  if (!faqHeading.test(html)) return html;

  // Capture content after FAQ heading up to the next h2 or end.
  const match = html.match(
    /<h2>\s*Frequently Asked Questions\s*<\/h2>([\s\S]*?)(?=<h2>|$)/i
  );
  if (!match) return html;

  const faqBody = match[1] || "";
  const items = [];

  const itemRegex = /<h3>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3>|$)/gi;
  let m;
  while ((m = itemRegex.exec(faqBody))) {
    const question = m[1].trim();
    const answerHtml = m[2].trim();
    if (!question || !answerHtml) continue;
    items.push({ question, answerHtml });
  }

  if (!items.length) return html;

  const faqHtml = `
    <div class="faqBlock">
      <h2 class="faqTitle">Frequently Asked Questions</h2>
      <div class="faqList">
        ${items
          .map(
            (item, idx) => `
          <details class="faqItem"${idx === 0 ? " open" : ""}>
            <summary>${item.question}</summary>
            <div class="faqAnswer">${item.answerHtml}</div>
          </details>`
          )
          .join("")}
      </div>
    </div>
  `;

  return html.replace(match[0], faqHtml);
}
