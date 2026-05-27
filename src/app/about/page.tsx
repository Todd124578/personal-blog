import { PageHeader } from "@/components/page-header";
import { getBlogData } from "@/lib/content";

export default async function AboutPage() {
  const { settings } = await getBlogData();

  return (
    <main className="page">
      <div className="container">
        <PageHeader title="关于我" description={settings.description} />
        <div className="grid category-grid">
          <section className="card">
            <h3>我是谁</h3>
            <p>互联网产品经理，关注产品策略、AI 工具、增长实验和个人知识系统。</p>
          </section>
          <section className="card">
            <h3>这里写什么</h3>
            <p>技术教程、产品复盘、模板产品、副业实验、摄影记录和长期输入。</p>
          </section>
          <section className="card">
            <h3>合作方向</h3>
            <p>产品咨询、模板共创、内容合作、社群交流和数字产品探索。</p>
          </section>
        </div>
      </div>
    </main>
  );
}
