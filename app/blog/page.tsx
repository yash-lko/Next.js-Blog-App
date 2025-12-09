import React, { Suspense } from "react";
import Loading from "../components/Loading";
import Image from "next/image";
import Link from "next/link";

export interface BlogPosts {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  slug: string;
  user: {
    username: string;
  };
}

const page = async () => {
  const res = await fetch("https://dev.to/api/articles");
  const blogs: BlogPosts[] = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900">Latest Blogs</h1>
        <p className="text-gray-600 mt-3">
          Stay updated with our latest articles.
        </p>
      </div>

      <Suspense fallback={<Loading />}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {blog.cover_image && (
                <Image
                  src={blog.cover_image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="rounded-lg w-full h-48 object-cover"
                />
              )}

              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {blog.title}
              </h2>

              <p className="text-gray-600 text-sm line-clamp-3">
                {blog.description}
              </p>

              <Link
                href={`/blog/${blog.id}`}
                className="text-[#8433fb] font-medium mt-4 inline-block hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default page;
