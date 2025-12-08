

import { FC } from "react";
import Link from "next/link";


const Page = async () => {


  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();

  return <div>...your blog list...</div>;
};




interface BlogPosts {
    id: number,
    title: string,
    body: string,
}
const Blogs: FC = async () => {
   
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
 
    const blogs: BlogPosts[] = data;
    return (
    
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {
                    blogs.map((blog) => (
                        <div key={blog.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
                        >
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">
                                {blog.title}
                            </h2>
                            <p className="text-gray-600 text-sm line-clamp-3">
                                {blog.body}
                            </p>

                            <Link
                                href={`blog/${blog.id}`}
                                className="text-pink-600 font-medium mt-4 inline-block hover:underline"
                            >
                                Read More →
                            </Link>
                        </div>
                    ))

                }

            </div>
     
    );
};

export default Blogs;
