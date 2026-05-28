import { ArrowRight, RadioTower } from "lucide-react";
import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { PostCard } from "@/components/post-card";
import { getBlogData } from "@/lib/content";

export default async function HomePage() {
  const data = await getBlogData();
  const featuredPosts = data.posts.filter((post) => post.featured).slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Internet Product Manager / Builder</p>
            <h1>{data.settings.title}</h1>
            <p>{data.settings.slogan}</p>
            <p>{data.settings.description}</p>
            <div className="hero-actions">
              <Link className="button primary" href="/posts">
                开始阅读 <ArrowRight size={18} />
              </Link>
              <Link className="button" href="/about">
                了解我
              </Link>
            </div>
            <div className="link-row">
              {data.settings.communityLinks.map((link) => (
                <Link className="tag" key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div
            className="visual-panel"
            style={{ "--hero-image": `url(${data.settings.heroImage})` } as React.CSSProperties}
          >
            <div className="signal-card">
              <strong>
                <RadioTower size={18} /> Product signal log
              </strong>
              <span>把产品判断、AI 工作流、副业实验和生活观察沉淀成可搜索的公开系统。</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Modules</p>
              <h2>内容分类</h2>
              <p>围绕产品经理的工作、输入和副业探索组织内容。</p>
            </div>
          </div>
          <div className="grid category-grid">
            {data.categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Featured</p>
              <h2>精选文章</h2>
              <p>先放几篇示例文章。你可以在后台替换成真实内容。</p>
            </div>
            <Link className="button" href="/posts">
              全部文章
            </Link>
          </div>
          <div className="grid post-grid">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
