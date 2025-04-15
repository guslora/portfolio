# Gus Lora Portfolio Setup

## 🚀 How to Run Locally

1. Install dependencies:
   ```
   npm install
   ```

2. Start the dev server:
   ```
   npm run dev
   ```

3. Visit:
   - Homepage: http://localhost:5173
   - Blog: http://localhost:5173/blog
   - Individual Post: http://localhost:5173/blog/cloud-journey

## 📝 Blog Notes
- All markdown posts live in the `/posts` directory.
- You can add more posts by creating `.md` files with this structure:

```
---
title: "Your Title"
date: "2025-04-14"
tags: ["Cloud", "Innovation"]
---

Markdown content goes here...
```

## 📦 Dependencies Required
Be sure these are in your `package.json` or install them manually:

```
npm install gray-matter react-markdown
```

## 📁 Public Files
- `public/profile.jpg` – Your avatar image
- `public/thumbnails/` – Project image previews
- `public/resume.pdf` – Resume download
- `public/onepager.pdf` – One-pager download
