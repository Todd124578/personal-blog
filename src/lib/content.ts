import { createClient } from "@sanity/client";
import { demoData } from "./demo-data";
import type { BlogData } from "./types";

type RuntimeEnv = Partial<Record<string, string | undefined>>;

const apiVersion = "2025-02-19";

export function hasSanityConfig(env: RuntimeEnv = process.env) {
  return Boolean(env.NEXT_PUBLIC_SANITY_PROJECT_ID && env.NEXT_PUBLIC_SANITY_DATASET);
}

function createSanityClient(env: RuntimeEnv = process.env) {
  if (!hasSanityConfig(env)) {
    return null;
  }

  return createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion,
    useCdn: true
  });
}

const settingsQuery = `*[_type == "siteSettings"][0]`;
const categoriesQuery = `*[_type == "category"] | order(title asc)`;
const tagsQuery = `*[_type == "tag"] | order(title asc)`;
const postsQuery = `*[_type == "post" && status == "published"] | order(publishedAt desc) {
  ...,
  category->,
  tags[]->
}`;
const projectsQuery = `*[_type == "project"] | order(title asc)`;
const friendsQuery = `*[_type == "friend"] | order(name asc)`;
const mediaPicksQuery = `*[_type == "mediaPick"] | order(title asc)`;
const guestbookQuery = `*[_type == "guestbookEntry" && approved == true] | order(createdAt desc)`;

export async function getBlogData(env: RuntimeEnv = process.env): Promise<BlogData> {
  const client = createSanityClient(env);

  if (!client) {
    return demoData;
  }

  const [settings, categories, tags, posts, projects, friends, mediaPicks, guestbookEntries] =
    await Promise.all([
      client.fetch(settingsQuery),
      client.fetch(categoriesQuery),
      client.fetch(tagsQuery),
      client.fetch(postsQuery),
      client.fetch(projectsQuery),
      client.fetch(friendsQuery),
      client.fetch(mediaPicksQuery),
      client.fetch(guestbookQuery)
    ]);

  return {
    settings: settings ?? demoData.settings,
    categories: categories?.length ? categories : demoData.categories,
    tags: tags?.length ? tags : demoData.tags,
    posts: posts?.length ? posts : demoData.posts,
    projects: projects?.length ? projects : demoData.projects,
    friends: friends?.length ? friends : demoData.friends,
    mediaPicks: mediaPicks?.length ? mediaPicks : demoData.mediaPicks,
    guestbookEntries: guestbookEntries?.length ? guestbookEntries : demoData.guestbookEntries
  };
}

export async function getPostBySlug(slug: string) {
  const data = await getBlogData();
  return data.posts.find((post) => post.slug === slug) ?? null;
}

export async function getPostsByCategory(slug: string) {
  const data = await getBlogData();
  return data.posts.filter((post) => post.category.slug === slug);
}

export async function getPostsByTag(slug: string) {
  const data = await getBlogData();
  return data.posts.filter((post) => post.tags.some((tag) => tag.slug === slug));
}
