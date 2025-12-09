import React from "react";
import Link from "next/link";
import WhatWeOffer from "./components/WhatWeOffer";
import CTASection from "./components/CtaSection";

const Page = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Learn Tech in a Simple & Smart Way 🚀
            </h1>
            <p className="text-lg opacity-90 mb-6">
              Easy tutorials, guides, tips & the latest tech updates — all in one place.
            </p>
            <Link 
              href="/blog"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition"
            >
              Explore Blogs →
            </Link>
          </div>

          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1200"
              alt="Tech"
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>


      {/* LATEST BLOG POSTS */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* CARD */}
            {[
              {
                title: "How to Increase Phone Speed",
                desc: "Quick & simple tips to make your smartphone faster...",
                img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800"
              },
              {
                title: "Best Apps for Students 2025",
                desc: "The must-have apps every student should use this year...",
                img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
              },
              {
                title: "Top 5 Chrome Extensions",
                desc: "Boost productivity with these powerful extensions...",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800"
              },
            ].map((post, i) => (
              <div 
                key={i}
                className="bg-white shadow rounded-xl overflow-hidden hover:shadow-xl transition"
              >
                <img 
                  src={post.img}
                  alt="Post"
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{post.desc}</p>
                  <Link href="/blog" className="text-blue-600  font-medium inline-block">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


    <WhatWeOffer/>

<CTASection/>

    </div>
  );
};

export default Page;
