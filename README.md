# Church Website

A modern church website built with Astro, featuring ministry pages, sermons, and a blog.

## 🚀 Project Structure

```text
/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── blog/      # MDX blog posts
│   │   └── sermons/   # Sermon data
│   ├── layouts/
│   └── pages/
└── package.json
```

## 📝 Content Management

### Blog Posts
Create new blog posts by adding `.mdx` files to `src/content/blog/`:

```mdx
---
title: "Post Title"
date: 2024-03-24
author: "Author Name"
excerpt: "Brief excerpt of the post"
image: "/images/optional-image.jpg"
---

Your content here in Markdown format
```

### Sermons
Add sermons by updating `src/content/sermons/sermons.json`:

```json
{
  "sermons": [
    {
      "title": "Sermon Title",
      "date": "2024-03-24T00:00:00.000Z",
      "speaker": "Speaker Name",
      "description": "Sermon description",
      "videoUrl": "https://youtube.com/watch?v=example"
    }
  ]
}
```

### Ministries
Add new ministries by updating the array in `src/pages/ministries/index.astro`.

## 🧞 Commands

| Command                | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `npm install`         | Installs dependencies                            |
| `npm run dev`         | Starts local dev server at `localhost:4321`      |
| `npm run build`       | Build your production site to `./dist/`          |
| `npm run preview`     | Preview your build locally, before deploying     |