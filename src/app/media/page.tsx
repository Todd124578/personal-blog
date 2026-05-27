import { PageHeader } from "@/components/page-header";
import { getBlogData } from "@/lib/content";

export default async function MediaPage() {
  const { mediaPicks } = await getBlogData();

  return (
    <main className="page">
      <div className="container">
        <PageHeader title="书单 / 影单" description="记录长期输入，也记录它们如何影响产品判断。" />
        <div className="grid category-grid">
          {mediaPicks.map((item) => (
            <article className="card" key={`${item.type}-${item.title}`}>
              <div className="meta">
                <span>{item.type === "book" ? "书籍" : "影像"}</span>
                {item.rating ? <span>{item.rating}/5</span> : null}
              </div>
              <h3 style={{ marginTop: 12 }}>{item.title}</h3>
              <p>{item.creator}</p>
              <p>{item.notes}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
