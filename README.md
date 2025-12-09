# 📘 Next.js Blog App (DEV.to API)

A simple, fast, and production-ready **Next.js (App Router)** blog application that fetches articles from the **DEV.to public API**, lists them on a blog listing page, and displays full article details using SEO-friendly **dynamic slug** routes.

This repo demonstrates server-side fetching, dynamic routing, and rendering article HTML safely with `dangerouslySetInnerHTML`.

---

## 🚀 Features

* Fetch blog posts from the **DEV.to API** (`https://dev.to/api/articles`).
* Blog listing page with thumbnails, titles and short descriptions.
* Dynamic blog detail pages using `app/blog/[slug]/page.tsx`.
* Optimized images via Next.js `next/image`.
* Server-side fetching for fast, SEO-friendly pages.
* Graceful error handling for missing or invalid slugs.
* Responsive layout built with Tailwind CSS (or your CSS of choice).

---

## 🧩 Tech Stack

* **Next.js 14 (App Router)**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **DEV.to REST API**
* **next/image** for image optimization

---

## 📁 Project Structure

```
app/
 ├─ blog/
 │   ├─ page.tsx        -> Blog listing (fetches articles)
 │   └─ [slug]/
 │        └─ page.tsx   -> Blog details (match by slug)
 ├─ layout.tsx
 └─ globals.css
public/
 └─ placeholder.png     -> Fallback image
package.json
README.md
```

---

## ⚙️ Installation & Local Development

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn
```

3. Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔎 How Routing & Slug Matching Works

1. The blog listing fetches articles from the DEV.to API:

```ts
const res = await fetch('https://dev.to/api/articles');
const data = await res.json();
```

2. Each article has a `slug` field. Links are generated like:

```
/blog/{slug}
```

3. The dynamic page receives `params.slug` (from Next.js). Example matching code:

```ts
const blogSlug = params.slug; // string
const post = data.find((b: any) => b.slug.trim() === blogSlug.trim());
```

4. If `post` is not found, return a friendly "Article not found" UI.

> Note: The DEV.to API also supports fetching a single article by `username` + `slug` at `/api/articles/{username}/{slug}`. If you know the author username, consider that endpoint for efficiency.

---

## ✅ Example: Dynamic Page (simplified)

```ts
export default async function Page({ params }: { params: { slug: string } }) {
  const blogSlug = params.slug;
  const res = await fetch('https://dev.to/api/articles');
  const data = await res.json();
  const post = data.find((b: any) => b.slug.trim() === blogSlug.trim());

  if (!post) return <div>Article not found</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      <img src={post.cover_image || '/placeholder.png'} alt={post.title} />
      <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
    </article>
  );
}
```

---

## 🔮 Future Improvements

* Add **pagination** for the blog list.
* Add **search** and **tag/category** filters.
* Cache API responses (ISR / SWR) to reduce requests.
* Add **author** pages and per-author fetching using `/api/articles/{username}`.
* Add **dark mode**, accessibility improvements, and tests.

---

## 📸 Screenshots

*Add screenshots of the blog list and article page here. Use the `public/` folder and reference images in the README.*

---

## 👨‍💻 Author

**Yashwant Kumar Nishad** — Frontend Developer (React / Next.js)

If this project helped you, please ⭐ star the repository!

---

## 📄 License

MIT © Yashwant Kumar Nishad
