# Vercel Personal Blog Design

## Goal

Build a personal blog and product-manager profile site that can be deployed on Vercel, edited through a visual CMS, optimized for search traffic, and extended later for paid products, memberships, AI assistants, and community funnels.

## Audience

The site is aimed at product peers, template buyers, collaborators, and people with similar interests in product, technology, AI, growth, and personal knowledge systems.

## Platform Choice

Use Next.js on Vercel for the public site, a free Git-based visual CMS, Giscus for comments, and Vercel Web Analytics for visitor analytics.

This keeps the first version mostly free, with the likely recurring cost limited to a custom domain. Content lives in GitHub so Vercel can rebuild the site after published edits.

## First Version Scope

The first version should ship a complete usable blog, not a placeholder landing page.

Included pages:

- Home page with a first-screen visual hero, avatar, slogan, profile summary, and community/contact links.
- Category modules on the home page.
- Article list page.
- Category pages.
- Tag pages.
- Article detail pages.
- About page.
- Friends page.
- Guestbook page.
- Books and movies page.
- Projects page.

Included content capabilities:

- Technical tutorials.
- Product thinking.
- AI tools and workflows.
- Photography posts.
- Long essays.
- Embedded audio.
- Embedded video.
- Cover images.
- Categories.
- Tags.
- Article summary.
- SEO title and description.

Included growth and interaction features:

- SEO metadata.
- Sitemap.
- Robots file.
- RSS feed.
- Giscus comments.
- Placeholder hooks for likes and page views.
- Social and community jump links.
- Vercel Web Analytics.

## Visual Direction

The visual style should be minimal, technical, and product-minded. It should feel like a personal operating system for an internet product manager, not a generic template blog.

The design uses:

- A dark-first visual system with a light theme option.
- Clean typography and strong scanning rhythm.
- Top navigation.
- A large first-screen visual hero.
- Configurable avatar, slogan, hero image, and accent color.
- Subtle grid, glow, and glass effects used with restraint.
- Category cards and article cards with compact metadata.

## Content Model

The CMS should provide visual editing for:

- Site settings: name, title, slogan, avatar, hero image, theme color, social links, community links, SEO defaults.
- Posts: title, slug, status, publish date, cover image, summary, category, tags, body, SEO metadata, featured flag.
- Categories: title, slug, description, accent color.
- Tags: title and slug.
- Projects: title, slug, cover, summary, external link, body.
- Friends: name, avatar, site URL, description.
- Media picks: type, title, cover, creator, link, rating, notes.
- Guestbook entries: name, message, optional link, created date, approval status.

## Architecture

The public site reads published content from local JSON files under `src/content`, edited through the CMS.

Next.js App Router handles routes, metadata, sitemap, robots, and RSS. The site should be deployable to Vercel with environment variables for Giscus.

## Out Of Scope For First Version

The first version will not implement paid memberships, payment checkout, private content, AI chat, or a full like/view persistence backend. It will include clean integration points so these can be added later without redesigning the whole site.

## Success Criteria

- The site runs locally.
- The home page looks like a technology/product personal brand site.
- Core pages exist and are navigable.
- Articles can be represented by CMS data and demo fallback data.
- SEO metadata, sitemap, robots, and RSS are present.
- The project can be imported into Vercel.
- A non-technical owner can edit future posts through the Git-based CMS after GitHub access is connected.
