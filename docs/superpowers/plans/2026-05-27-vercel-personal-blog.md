# Vercel Personal Blog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vercel-ready personal blog with Next.js, a free Git-based CMS, SEO routes, comments, analytics, and a minimal technology/product-manager visual system.

**Architecture:** The public site is a Next.js App Router application. Content is loaded through a small data layer that reads editable JSON files from `src/content`.

**Tech Stack:** Next.js, React, TypeScript, Git-based CMS, Giscus, Vercel Web Analytics, Vitest, Testing Library.

---

## File Structure

- `package.json`: scripts and dependencies.
- `src/app`: routes, layouts, metadata, sitemap, robots, RSS.
- `src/components`: shared interface pieces.
- `src/lib`: content loading and formatting.
- `public/admin`: CMS entry and content editing config.
- `src/styles`: global styling.
- `tests`: unit tests for content fallback and SEO helpers.

## Tasks

### Task 1: Scaffold Project

- [ ] Create the Next.js project files, TypeScript config, lint config, and test config.
- [ ] Add scripts for development, build, lint, typecheck, and tests.
- [ ] Install dependencies.
- [ ] Verify the default route can build.

### Task 2: Content Layer

- [ ] Write tests proving the site loads editable local content.
- [ ] Implement typed content models for settings, posts, categories, tags, projects, friends, media picks, and guestbook entries.
- [ ] Implement local content helpers.
- [ ] Verify tests pass.

### Task 3: Core UI

- [ ] Build layout, top navigation, theme shell, hero, category modules, article cards, and footer.
- [ ] Build home page using the content layer.
- [ ] Verify responsive layout on desktop and mobile.

### Task 4: Content Pages

- [ ] Build article list, article detail, category, tag, about, friends, guestbook, books and movies, and projects pages.
- [ ] Add Markdown rendering for article bodies.
- [ ] Add empty states that feel intentional when CMS collections are empty.

### Task 5: SEO And Growth

- [ ] Add metadata helpers.
- [ ] Add sitemap route.
- [ ] Add robots route.
- [ ] Add RSS route.
- [ ] Add Vercel Web Analytics.
- [ ] Add Giscus comments component with environment-variable configuration.

### Task 6: Free Git CMS

- [ ] Add CMS collections for all content models.
- [ ] Add admin route at `/admin`.
- [ ] Add a setup document explaining how to edit content through GitHub.

### Task 7: Verification And Deployment Prep

- [ ] Run tests, typecheck, lint, and production build.
- [ ] Start a local development server.
- [ ] Open the site in the browser and check desktop and mobile views.
- [ ] Add a non-technical deployment guide for Vercel, the Git CMS, custom domain, and comments.
