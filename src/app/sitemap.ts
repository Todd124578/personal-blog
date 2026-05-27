import type { MetadataRoute } from "next";
import { getBlogData } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const data = await getBlogData();
  const staticRoutes = ["", "/posts", "/about", "/friends", "/guestbook", "/media", "/projects"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date()
    })),
    ...data.posts.map((post) => ({
      url: `${siteUrl}/posts/${post.slug}`,
      lastModified: new Date(post.publishedAt)
    })),
    ...data.categories.map((category) => ({
      url: `${siteUrl}/categories/${category.slug}`,
      lastModified: new Date()
    }))
  ];
}
