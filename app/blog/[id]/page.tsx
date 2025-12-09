import Link from "next/link";
import Image from "next/image";

interface Props {
  params: { id: string };
}

async function Page({ params }: Props) {
  const { id } = params;

  const res = await fetch(`https://dev.to/api/articles/${id}`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Next.js App"
    }
  });

  console.log(res, "RESULT")

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-xl">Failed to load article.</p>
      </div>
    );
  }

  const post = await res.json();

  console.log("POST DATA:", post); // <-- real debugging info

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        
        {/* Thumbnail */}
        {post.cover_image && (
          <div className="mb-8">
            <Image
              src={post.cover_image}
              alt={post.title}
              width={900}
              height={500}
              className="rounded-xl w-full object-cover"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="text-gray-600 text-sm mb-6">
          <p>
            Published on{" "}
            <span className="font-medium">{post.readable_publish_date}</span> •{" "}
            {post.reading_time_minutes} min read
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tag_list?.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-lg text-gray-700 mb-10">
          <p>{post.description}</p>
        </div>

        {/* Full Body */}
        {post.body_html && (
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.body_html }}
          />
        )}

        {/* Back Button */}
        <Link
          href="/blog"
          className="mt-10 inline-block text-pink-600 font-medium hover:underline"
        >
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
}

export default Page;
