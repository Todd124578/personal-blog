# Sanity CMS Schema Guide

Create these document types in Sanity Studio when you connect the visual CMS.

## siteSettings

- `name`: string
- `title`: string
- `slogan`: string
- `description`: text
- `avatar`: image
- `heroImage`: image
- `accentColor`: string
- `socialLinks`: array of `{ label, href }`
- `communityLinks`: array of `{ label, href }`

## category

- `title`: string
- `slug`: slug
- `description`: text
- `accentColor`: string

## tag

- `title`: string
- `slug`: slug

## post

- `title`: string
- `slug`: slug
- `status`: string, `draft` or `published`
- `publishedAt`: date
- `coverImage`: image
- `summary`: text
- `category`: reference to `category`
- `tags`: array of references to `tag`
- `body`: block content
- `seoTitle`: string
- `seoDescription`: text
- `featured`: boolean
- `readingTime`: string

## project

- `title`: string
- `slug`: slug
- `coverImage`: image
- `summary`: text
- `externalUrl`: url
- `body`: block content

## friend

- `name`: string
- `avatar`: image
- `siteUrl`: url
- `description`: text

## mediaPick

- `type`: string, `book` or `movie`
- `title`: string
- `coverImage`: image
- `creator`: string
- `link`: url
- `rating`: number
- `notes`: text

## guestbookEntry

- `name`: string
- `message`: text
- `link`: url
- `createdAt`: datetime
- `approved`: boolean
