import { PageHeader } from "@/components/page-header";
import { getBlogData } from "@/lib/content";

export default async function GuestbookPage() {
  const { guestbookEntries } = await getBlogData();

  return (
    <main className="page">
      <div className="container">
        <PageHeader title="留言板" description="欢迎留下想法、问题、合作线索或一句招呼。" />
        <div className="grid">
          {guestbookEntries.map((entry) => (
            <article className="card" key={`${entry.name}-${entry.createdAt}`}>
              <div className="meta">
                <span>{entry.name}</span>
                <span>{entry.createdAt}</span>
              </div>
              <p>{entry.message}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
