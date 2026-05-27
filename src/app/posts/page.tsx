import { PageHeader } from "@/components/page-header";
import { PostCard } from "@/components/post-card";
import { getBlogData } from "@/lib/content";

export default async function PostsPage() {
  const { posts } = await getBlogData();

  return (
    <main className="page">
      <div className="container">
        <PageHeader title="全部文章" description="产品思考、技术教程、AI 工作流、作品案例和生活观察。" />
        <div className="grid post-grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
