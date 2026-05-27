import type { PortableTextBlock } from "@portabletext/types";

export type ContentStatus = "draft" | "published";

export type SiteLink = {
  label: string;
  href: string;
};

export type SiteSettings = {
  name: string;
  title: string;
  slogan: string;
  description: string;
  avatar?: string;
  heroImage?: string;
  accentColor: string;
  socialLinks: SiteLink[];
  communityLinks: SiteLink[];
};

export type Category = {
  title: string;
  slug: string;
  description: string;
  accentColor: string;
};

export type Tag = {
  title: string;
  slug: string;
};

export type Post = {
  title: string;
  slug: string;
  status: ContentStatus;
  publishedAt: string;
  coverImage?: string;
  summary: string;
  category: Category;
  tags: Tag[];
  body: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  featured: boolean;
  readingTime: string;
};

export type Project = {
  title: string;
  slug: string;
  coverImage?: string;
  summary: string;
  externalUrl?: string;
  body: PortableTextBlock[];
};

export type Friend = {
  name: string;
  avatar?: string;
  siteUrl: string;
  description: string;
};

export type MediaPick = {
  type: "book" | "movie";
  title: string;
  coverImage?: string;
  creator: string;
  link?: string;
  rating?: number;
  notes: string;
};

export type GuestbookEntry = {
  name: string;
  message: string;
  link?: string;
  createdAt: string;
  approved: boolean;
};

export type BlogData = {
  settings: SiteSettings;
  categories: Category[];
  tags: Tag[];
  posts: Post[];
  projects: Project[];
  friends: Friend[];
  mediaPicks: MediaPick[];
  guestbookEntries: GuestbookEntry[];
};
