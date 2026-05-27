# Deployment Guide

## What You Have

This is a Vercel-ready personal blog for an internet product manager.

It can run immediately with demo content. After you connect Sanity, you can edit articles in a visual CMS.

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

## Connect Sanity CMS

1. Create a free Sanity account.
2. Create a project and dataset named `production`.
3. Create document types using `sanity.schemas.md`.
4. In Vercel project settings, add:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

5. Redeploy the Vercel project.

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

The demo values live in:

```text
src/lib/demo-data.ts
```

You can launch with demo content first, then replace it through Sanity later.
