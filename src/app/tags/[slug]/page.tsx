import { PageHeader } from "@/components/page-header";
import { PostCard } from "@/components/post-card";
import { getBlogData, getPostsByTag } from "@/lib/content";

export async function generateStaticParams() {
  const { tags } = await getBlogData();
  return tags.map((tag) => ({ slug: tag.slug }));
}

export default async function TagPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getBlogData();
  const tag = data.tags.find((item) => item.slug === slug);
  const posts = await getPostsByTag(slug);

  return (
    <main className="page">
      <div className="container">
        <PageHeader title={`#${tag?.title ?? slug}`} description="同一标签下的相关内容。" />
        <div className="grid post-grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
