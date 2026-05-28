import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type {
  BlogData,
  Category,
  Friend,
  GuestbookEntry,
  MediaPick,
  Post,
  Project,
  SiteSettings,
  Tag
} from "./types";

type RawPost = Omit<Post, "category" | "tags"> & {
  category: string;
  tags: string[];
};

const contentRoot = path.join(process.cwd(), "src", "content");

async function readJsonFile<T>(...segments: string[]) {
  const file = await readFile(path.join(contentRoot, ...segments), "utf-8");
  return JSON.parse(file) as T;
}

async function readJsonDir<T>(directory: string) {
  const dir = path.join(contentRoot, directory);
  const files = (await readdir(dir)).filter((file) => file.endsWith(".json")).sort();

  return Promise.all(files.map((file) => readJsonFile<T>(directory, file)));
}

function bySlug<T extends { slug: string }>(items: T[]) {
  return new Map(items.map((item) => [item.slug, item]));
}

export async function getBlogData(): Promise<BlogData> {
  const [settings, categories, tags, rawPosts, projects, friends, mediaPicks, guestbookEntries] =
    await Promise.all([
      readJsonFile<SiteSettings>("settings.json"),
      readJsonDir<Category>("categories"),
      readJsonDir<Tag>("tags"),
      readJsonDir<RawPost>("posts"),
      readJsonDir<Project>("projects"),
      readJsonDir<Friend>("friends"),
      readJsonDir<MediaPick>("media"),
      readJsonDir<GuestbookEntry>("guestbook")
    ]);

  const categoryMap = bySlug(categories);
  const tagMap = bySlug(tags);
  const posts = rawPosts
    .filter((post) => post.status === "published")
    .map((post) => ({
      ...post,
      category: categoryMap.get(post.category) ?? categories[0],
      tags: post.tags.map((tag) => tagMap.get(tag)).filter(Boolean) as Tag[]
    }))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return {
    settings,
    categories,
    tags,
    posts,
    projects,
    friends,
    mediaPicks,
    guestbookEntries: guestbookEntries.filter((entry) => entry.approved)
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
