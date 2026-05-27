import Link from "next/link";
import type { Post } from "@/lib/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link className="card post-card" href={`/posts/${post.slug}`}>
      <div>
        <div
          className="post-cover"
          style={
            post.coverImage
              ? ({ "--cover-image": `url(${post.coverImage})` } as React.CSSProperties)
              : undefined
          }
        />
        <div className="meta">
          <span>{post.category.title}</span>
          <span>{post.publishedAt}</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 style={{ marginTop: 14 }}>{post.title}</h3>
        <p>{post.summary}</p>
      </div>
      <div className="meta">
        {post.tags.map((tag) => (
          <span key={tag.slug}>#{tag.title}</span>
        ))}
      </div>
    </Link>
  );
}
