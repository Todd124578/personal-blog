# Deployment Guide

## What You Have

This is a Vercel-ready personal blog for an internet product manager.

It can run immediately with editable content. The visual CMS at `/admin` saves articles and page data into GitHub, then Vercel republishes the site.

## Deploy To Vercel

1. Put this folder on GitHub.
2. Open Vercel.
3. Click `Add New Project`.
4. Import the GitHub repository.
5. Keep the default framework as `Next.js`.
6. Click `Deploy`.

## Connect A Custom Domain

1. Buy a domain from a domain provider.
2. In Vercel, open the project.
3. Go to `Settings` -> `Domains`.
4. Add your domain.
5. Follow Vercel's DNS instructions.
6. Set `NEXT_PUBLIC_SITE_URL` to your final website address.

## Use The Free CMS

The site uses a free Git-based CMS. Content is saved into GitHub under `src/content`, and Vercel redeploys after changes are published.

Admin URL:

```text
https://your-domain.com/admin
```

Login:

Use GitHub token login in the CMS. The token needs repository content write access for `Todd124578/personal-blog`.

## Connect Comments

1. Create or choose a GitHub repository.
2. Enable GitHub Discussions.
3. Open https://giscus.app and follow the setup form.
4. Copy the generated values into Vercel environment variables:

```text
NEXT_PUBLIC_GISCUS_REPO=
NEXT_PUBLIC_GISCUS_REPO_ID=
NEXT_PUBLIC_GISCUS_CATEGORY=
NEXT_PUBLIC_GISCUS_CATEGORY_ID=
```

5. Redeploy.

## Edit Site Text Before Launch

The editable values live in:

```text
src/content
```

You can launch first, then replace content through `/admin`.
