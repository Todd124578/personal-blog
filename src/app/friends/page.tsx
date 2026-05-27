import { PageHeader } from "@/components/page-header";
import { getBlogData } from "@/lib/content";

export default async function FriendsPage() {
  const { friends } = await getBlogData();

  return (
    <main className="page">
      <div className="container">
        <PageHeader title="友链" description="值得长期关注的人、项目和站点。" />
        <div className="grid category-grid">
          {friends.map((friend) => (
            <a className="card" href={friend.siteUrl} key={friend.name}>
              <h3>{friend.name}</h3>
              <p>{friend.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
