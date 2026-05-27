import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { Comments } from "@/components/comments";
import { getBlogData, getPostBySlug } from "@/lib/content";

export async function generateStaticParams() {
  const { posts } = await getBlogData();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.summary
  };
}

export default async function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="page">
      <article className="container article">
        <div className="meta">
          <span>{post.category.title}</span>
          <span>{post.publishedAt}</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 style={{ marginTop: 16 }}>{post.title}</h1>
        <p style={{ color: "var(--muted)", fontSize: 18, lineHeight: 1.8 }}>{post.summary}</p>
        <div className="link-row">
          {post.tags.map((tag) => (
            <span className="tag" key={tag.slug}>
              #{tag.title}
            </span>
          ))}
        </div>
        <div className="article-body">
          {post.body?.length ? (
            <PortableText value={post.body} />
          ) : (
            <p>这篇文章的正文会在你接入 Sanity 后从后台读取。</p>
          )}
        </div>
        <Comments />
      </article>
    </main>
  );
}
