import Link from "next/link";
import React from "react";

interface Props {
    params: { id: string };
}

const Page = async ({ params }: Props) => {
    const resolveparams = await params;
    const { id } = resolveparams;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    const post = data;
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-16">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
                {/* Blog Title */}
                <h1 className="text-4xl font-bold mb-6 text-gray-900">
                    {post.title}
                </h1>

                {/* Blog Metadata */}


                {/* Blog Content */}
                <div className="prose prose-lg text-gray-700">
                    <p>
                        {post.body}
                    </p>


                </div>

                {/* Back Link */}
                <Link
                    href="/blog"
                    className="mt-8 inline-block text-blue-600 font-medium hover:underline"
                >
                    ← Back to Blogs
                </Link>
            </div>
        </div>
    );
};

export default Page;
