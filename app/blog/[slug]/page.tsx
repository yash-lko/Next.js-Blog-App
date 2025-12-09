import Link from "next/link";
import Image from "next/image";


export const metadata = {
  icons: {
    icon: "../images/favicon.ico",
  },
};

export default async function ProductDetails({ params }: { params: Promise<{ slug: string }> }) {
  const blogSlug = (await params).slug;

  try {
    const res = await fetch('https://dev.to/api/articles');
    const data = await res.json();
   
    if (!res.ok) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-red-600 text-xl">Failed to load article.</p>
        </div>
      );
    }
    const post = data.find((b: any) => b.slug.trim() === blogSlug.trim());

    return (
      <div className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
          <div className="mb-8">
            <Image
              src={post.cover_image || "/placeholder.png"}
              alt={post.title}
              width={900}
              height={500}
              className="rounded-xl w-full object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>

          <div className="text-gray-600 text-sm mb-6">
            <p>
              Published on{" "}
              <span className="font-medium">{post.readable_publish_date}</span> •{" "}
              {post.reading_time_minutes} min read
            </p>
          </div>

          <div className="prose prose-lg text-gray-700 mb-10">
            <p>{post.description}</p>
          </div>

          {post.body_html && (
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.body_html }}
            />
          )}

          <Link
            href="/blog"
            className="mt-10 inline-block text-pink-600 font-medium hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-xl">Something went wrong.</p>
      </div>
    );
  }
}
