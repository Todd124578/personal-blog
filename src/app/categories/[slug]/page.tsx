import { PageHeader } from "@/components/page-header";
import { PostCard } from "@/components/post-card";
import { getBlogData, getPostsByCategory } from "@/lib/content";

export async function generateStaticParams() {
  const { categories } = await getBlogData();
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getBlogData();
  const category = data.categories.find((item) => item.slug === slug);
  const posts = await getPostsByCategory(slug);

  return (
    <main className="page">
      <div className="container">
        <PageHeader
          title={category?.title ?? "分类"}
          description={category?.description ?? "这个分类下的文章。"}
        />
        <div className="grid post-grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
