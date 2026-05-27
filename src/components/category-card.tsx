import Link from "next/link";
import type { Category } from "@/lib/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      className="card category-card"
      href={`/categories/${category.slug}`}
      style={{ "--category-color": category.accentColor } as React.CSSProperties}
    >
      <div className="dot" />
      <h3>{category.title}</h3>
      <p>{category.description}</p>
    </Link>
  );
}
