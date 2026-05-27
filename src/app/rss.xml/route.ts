import { getBlogData } from "@/lib/content";

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const data = await getBlogData();
  const items = data.posts
    .map(
      (post) => `<item>
  <title><![CDATA[${post.title}]]></title>
  <link>${siteUrl}/posts/${post.slug}</link>
  <guid>${siteUrl}/posts/${post.slug}</guid>
  <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
  <description><![CDATA[${post.summary}]]></description>
</item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${data.settings.title}</title>
  <link>${siteUrl}</link>
  <description>${data.settings.description}</description>
  ${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
