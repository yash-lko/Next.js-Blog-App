
import Link from "next/link";
import WhatWeOffer from "./components/WhatWeOffer";
import CTASection from "./components/CtaSection";
import { BlogPosts } from "./types/blogs";
import Hero from "./components/Hero";

const Page = async () => {

  const res = await fetch('https://dev.to/api/articles');
  const data: BlogPosts[] = await res.json();
  const firstThree = data.slice(5, 8);
  return (
    <div>
    <Hero/>
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {firstThree.map((post, i) => (
              <div
                key={i}
                className="bg-white shadow rounded-xl overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={post.cover_image}
                  alt="Post"
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="text-blue-600  font-medium inline-block">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      <WhatWeOffer />

      <CTASection />

    </div>
  );
};

export default Page;
