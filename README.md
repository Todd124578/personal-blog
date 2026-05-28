# Todd的人生记录册

A Vercel-ready personal blog and product-manager profile site.

## Local Preview

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Useful Commands

```bash
npm test
npm run typecheck
npm run build
```

## CMS

Open:

```text
/admin
```

This is the free Git-based visual writing and content management backend. Content is saved into `src/content`.

## Main Files

- `src/content`: editable content managed by the visual CMS.
- `public/admin/config.yml`: CMS fields and GitHub backend settings.
- `src/app/page.tsx`: home page.
- `src/app/posts/[slug]/page.tsx`: article detail page.
- `DEPLOYMENT.md`: non-technical deployment guide.
- `CMS_CONTENT_MODEL.md`: CMS content structure guide.
