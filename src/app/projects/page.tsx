import { PageHeader } from "@/components/page-header";
import { getBlogData } from "@/lib/content";

export default async function ProjectsPage() {
  const { projects } = await getBlogData();

  return (
    <main className="page">
      <div className="container">
        <PageHeader title="作品 / 项目" description="模板、工具、产品方案和副业实验会沉淀在这里。" />
        <div className="grid category-grid">
          {projects.map((project) => (
            <a className="card" href={project.externalUrl ?? "#"} key={project.slug}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
